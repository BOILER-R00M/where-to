

This document details the ManageAttributeFunction Lambda function for the "Where To?" application. This function is used to manage attributes for cities: it creates new attributes, edits existing attributes, and deletes attributes.

> Keep in mind, nothing is set in stone, this is just potential at the moment 

## Function Summary

The `ManageAttributeFunction` is responsible for three main actions:

1. Creating a new attribute for a city in the UserGroups table in DynamoDB.
2. Editing an existing attribute for a city.
3. Deleting an attribute from a city.

The action to be performed is determined by an action parameter included in the request.

## Expected Inputs

The function expects a JSON object with the following structure:

```json
{
  "action": "createAttribute" | "editAttribute" | "deleteAttribute",
  "userId": "<userId>",
  "groupName": "<groupName>",
  "cityName": "<cityName>",
  "attributeName": "<attributeName>",
  "attributeValue": "<attributeValue>"
}
```

- `action`: A string that indicates the action to be performed. It should be one of "createAttribute", "editAttribute", or "deleteAttribute".
- `userId`: The ID of the user who is performing the action.
- `groupName`: The name of the group in which the city is located.
- `cityName`: The name of the city to which the attribute is to be added, edited, or deleted.
- `attributeName`: The name of the attribute to be created, edited, or deleted.
- `attributeValue`: The value of the attribute to be created or edited. This is not needed when the action is "deleteAttribute".

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

The `ManageAttributeFunction` Lambda function needs permissions to read and write to the UserGroups table in DynamoDB. The required permissions can be included in an IAM role attached to the Lambda function. This role should include the `dynamodb:GetItem`, `dynamodb:PutItem`, `dynamodb:UpdateItem`, and `dynamodb:DeleteItem` permissions for the UserGroups table.

## Example

An example input to the `ManageAttributeFunction` might look like this:

```json
{
  "action": "editAttribute",
  "userId": "user1",
  "groupName": "group1",
  "cityName": "City1",
  "attributeName": "Public Transportation",
  "attributeValue": 4
}
```

This request would edit the attribute "Public Transportation" for the city "City1" in the group "group1" to have a value of 4.

An example output might look like this:

```json
{
  "statusCode": 200,
  "body": "Attribute 'Public Transportation' for city 'City1' successfully edited to 4."
}
```

This response indicates that the operation was successful.
