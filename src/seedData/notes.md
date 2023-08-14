## **Seed Data Notes**

> to change view, use `shift + cmd + v` on mac, or `shift + ctrl + v` on windows

---

### Entities

_User_, _Group_, and _Location_

---

### Access Patterns

1. At login, we need to populate the dashboard with the **username** as well has a list component that contains the names of the groups that the user is a member of
2. When the user clicks on one of the groups, we need to fetch all the information that will allow us to do the following:
   a) fill out the map view with all of the locations entered in that group
   b) allow us to see the average scores of a location, the users who added their scores to that location, and the specific scores that they provided
3. When the user clicks on one of the members in the group, we shoul be able to see all of the locations that the user added scores to as well as the specific scores that they provided

---

### Schema

#### **User**

```json
{
	"pk": "USER#0001",
	"sk": "GROUP#001",
	"username": "MadisonEvans94",
	"userID": "0001"
}
```

> We can fulfill pattern 1 by running a query for all of the items with a pk of "USER#<user_id>", which will return a list of objects that each contain username and a unique groupID

#### **Group** _(with location sort key)_

```json
{
	"pk": "GROUP#001",
	"sk": "LOCATION#001",
	"locationName": "Atlanta",
	"coordinates": {
		"lat": 33.753746,
		"lng": -84.38633
	},
	"averageScore": {
		"costOfLiving": 4.5,
		"pollution": 4.5,
		"crime": 4.5,
		"transportation": 4.5,
		"food": 4.5,
		"culture": 4.5,
		"naturalEnvironment": 4.5,
		"employmentOpportunities": 4.5,
		"entertainment": 4.5
	},
	"usersVisited": [
		{
			"userID": "0001",
			"username": "MadisonEvans94"
		},
		{
			"userID": "0002",
			"username": "TonyStarkAvenger"
		}
	]
}
```

> We can fulfill pattern 2 by querying groupID partition by the location sort key. This will return a list of objects like the one shown above. That way we can have immediate access to the average location score of each location on the map as well as a list of the users who visited the location

#### Group (_with user sort key_)

```json
{
	"pk": "GROUP#001#USER#0002",
	"sk": "LOCATION#001",
	"score": {
		"costOfLiving": 5,
		"pollution": 5,
		"crime": 5,
		"transportation": 5,
		"food": 5,
		"culture": 5,
		"naturalEnvironment": 5,
		"employmentOpportunities": 5,
		"entertainment": 5
	}
}
```

> We can fulfill our final requirement by using the composite partition key provided above and querying for sk starting with LOCATION. This will provide all of the locations a user has been as well as the scores they gave it

---

## **Some Things to Consider:**

1. **Denormalization**: Our schema uses denormalization, especially with the `usersVisited` array in the location item. This allows for efficient reads but can complicate writes. Every time a user scores a location, we'll need to update both the user's score and potentially the `usersVisited` array.

2. **Read vs. Write Efficiency**: The schema is optimized for read-heavy use cases. For example, fetching all users who have visited a location or all locations a user has scored can be done with a single query. However, this comes at the cost of more complex writes, especially when updating scores or adding new users to a location.

3. **Scalability Concerns**: While our current design handles the requirement of capping the number of users in a group to 500, if this constraint changes in the future, we might need to reconsider the `usersVisited` array approach due to potential size limitations.

4. **Extra Fetch Requests**: The schema is designed to minimize the number of fetch requests for our primary access patterns. However, for detailed user scores on a location, an additional fetch is required. This trade-off was made to keep the main location item lean and to optimize for the most common access patterns.

5. **Atomic Counters**: While not explicitly used in the schema, DynamoDB's atomic counters could be leveraged in the future if we need real-time score updates without reading the current value first. This can be especially useful if the frequency of score updates increases.

6. **Flexibility**: The composite keys used in the schema provide flexibility for future access patterns. For instance, if we need to fetch all locations scored by a user across all groups or all users who have scored a specific location across all groups, the current design can accommodate these with minor adjustments.

7. **Consistency**: Given the denormalized nature of the data, ensuring consistency can be a challenge, especially when updating scores. It's crucial to implement robust error-handling and potentially use DynamoDB transactions when making multiple related updates.

8. **Cost**: While our design optimizes for read efficiency, it's essential to monitor the read and write capacity units (RCUs and WCUs) to ensure cost-effectiveness. Over-provisioning can lead to unnecessary costs, while under-provisioning can result in throttling.

---

## **Lambda Code Snippets**

> The following section will go over the _read_ requests that we will eventually implement in the lambda functions that we have connecting the api gateway to the dynamodb table. We will eventually need to implement the writes as well

### **Setting up the DynamoDB Client**

Before performing any operations, you'll need to set up the DynamoDB client. Here's how you can do it:

```javascript
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: "us-west-1" });
```

### **Fetching All Groups a User is a Member Of**

To retrieve all the groups a user is a member of:

```javascript
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: "us-west-1" });

async function fetchUserGroups(userId) {
	const params = {
		TableName: "WhereTo",
		KeyConditionExpression: "pk = :pkVal AND begins_with(sk, :skVal)",
		ExpressionAttributeValues: {
			":pkVal": `USER#${userId}`,
			":skVal": "GROUP#",
		},
	};

	try {
		const results = await dbclient.send(new QueryCommand(params));
		return results.Items;
	} catch (err) {
		console.error(err);
	}
}
```

### **Fetching All Locations in a Group**

To retrieve all the locations in a group:

```javascript
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: "us-west-1" });

async function fetchGroupLocations(groupId) {
	const params = {
		TableName: "WhereTo",
		KeyConditionExpression: "pk = :pkVal AND begins_with(sk, :skVal)",
		ExpressionAttributeValues: {
			":pkVal": `GROUP#${groupId}`,
			":skVal": "LOCATION#",
		},
	};

	try {
		const results = await dbclient.send(new QueryCommand(params));
		return results.Items;
	} catch (err) {
		console.error(err);
	}
}
```

### **Fetching All Locations a User has Scored in a Group**

To retrieve all locations a user has scored in a group:

```javascript
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: "us-west-1" });

async function fetchUserLocationsInGroup(userId, groupId) {
	const params = {
		TableName: "WhereTo",
		KeyConditionExpression: "pk = :pkVal AND begins_with(sk, :skVal)",
		ExpressionAttributeValues: {
			":pkVal": `GROUP#${groupId}#USER#${userId}`,
			":skVal": "LOCATION#",
		},
	};

	try {
		const results = await dbclient.send(new QueryCommand(params));
		return results.Items;
	} catch (err) {
		console.error(err);
	}
}
```

---
