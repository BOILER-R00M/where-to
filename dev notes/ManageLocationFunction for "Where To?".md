
This document details the ManageLocationFunction Lambda function for the "Where To?" application. This function is used to manage locations (cities) within a user group: it creates new locations, edits existing locations, and deletes locations.

> Keep in mind, nothing is set in stone, this is just potential at the moment 

## Function Summary

The `ManageLocationFunction` is responsible for three main actions:

1. Adding a new city (location) to a user group in the UserGroups table in DynamoDB.
2. Editing an existing city's details.
3. Deleting a city from a user group.

The action to be performed is determined by an action parameter included in the request.

## Expected Inputs

The function expects a JSON object with the following structure:

```json
{
  "action": "addCity" | "editCity" | "deleteCity",
  "userId": "<userId>",
  "groupName": "<groupName>",
  "cityName": "<cityName>",
}
```

- `action`: A string that indicates the action to be performed. It should be one of "addCity", "editCity", or "deleteCity".
- `userId`: The ID of the user who is performing the action.
- `groupName`: The name of the group where the city is to be added, edited, or deleted.
- `cityName`: The name of the city to be added, edited, or deleted.

Note: If the action is "editCity", additional parameters related to the city details that are to be edited could be included in the request.

## Expected Outputs

The function will return a JSON object with the following structure:

```json
{
  "statusCode": 200,
  "body": "<Response Message>"
}
```

- `statusCode`: A status code that indicates the result of the function's execution. A 200 code means the operation was successful.
- `body`: A string containing a message about the result of the function's execution.

## Permissions

The `ManageLocationFunction` Lambda function needs permissions to read and write to the UserGroups table in DynamoDB. The required permissions can be included in an IAM role attached to the Lambda function. This role should include the `dynamodb:GetItem`, `dynamodb:PutItem`, `dynamodb:UpdateItem`, and `dynamodb:DeleteItem` permissions for the UserGroups table.

## Example

An example input to the `ManageLocationFunction` might look like this:

```json
{
  "action": "addCity",
  "userId": "user1",
  "groupName": "group1",
  "cityName": "City2",
}
```

This request would add a new city "City2" to the group "group1".

An example output might look like this:

```json
{
  "statusCode": 200,
  "body": "City 'City2' successfully added to group 'group1'."
}
```

This response indicates that the operation was successful.
