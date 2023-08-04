

This document outlines the suggested DynamoDB table structure, permissions, considerations, and an example item for the "Where To?" application. 

> Keep in mind, nothing is set in stone, this is just potential at the moment 

## Table Structure

### UserGroups Table

- **Primary Key:** groupId (String)
- **Attributes:** groupName (String), users (List), locations (List)

### Locations Table

- **Primary Key:** locationId (String)
- **Attributes:** locationName (String), attributes (Map), groupId (String)

### Attributes Table

- **Primary Key:** attributeId (String)
- **Attributes:** attributeName (String), attributeValue (Number), locationId (String)

## Examples

below are some examples of what an object might look like for an element in each of the tables 

### Locations Table 

```json
{
  "locationId": "location1",
  "locationName": "San Francisco",
  "attributes": {
    "attribute1": {
      "attributeName": "Great Food",
      "attributeValue": 0.9
    },
    "attribute2": {
      "attributeName": "Good Weather",
      "attributeValue": 0.7
    },
    "attribute3": {
      "attributeName": "High Cost of Living",
      "attributeValue": -0.8
    }
  },
  "groupId": "group1"
}
```


### Attributes Table 

```json 
{
  "attributeId": "a1b2c3",
  "attributeName": "Good Public Transportation",
  "attributeWeight": 2.0,
  "locationId": "d4e5f6",
  "userId": "g7h8i9",
  "groupId": "j0k1l2"
}

```

### UserGroups Table 

```json
{
  "groupId": "j0k1l2",
  "groupName": "Friends",
  "userId": ["g7h8i9", "m3n4o5", "p6q7r8"],
  "locationId": ["d4e5f6", "s9t0u1", "v2w3x4"]
}

```

## Permissions

The Lambda functions that interact with these tables will need permissions to read and write data. The following IAM policy statement provides these permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem",
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem",
                "dynamodb:Query",
                "dynamodb:Scan"
            ],
            "Resource": [
                "arn:aws:dynamodb:region:account-id:table/Users",
                "arn:aws:dynamodb:region:account-id:table/UserGroups",
                "arn:aws:dynamodb:region:account-id:table/Locations",
                "arn:aws:dynamodb:region:account-id:table/Attributes"
            ]
        }
    ]
}
```
Replace "region" and "account-id" with your AWS region and account ID.
