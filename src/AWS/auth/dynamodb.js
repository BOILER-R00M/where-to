// import { API } from 'aws-amplify';
import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAWWSACU622OFBY3F7",
  secretAccessKey: "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"
});

// export const createUser = async (userObj, cognitoUserId) => {
//     const { firstName, lastName, username, password, email } = userObj;
  
//     try {
//       const response = await API.post('WhereTo', '/users', {
//         body: {
//           pk: `USER#${cognitoUserId}`,
//           username: username,
//           userID: cognitoUserId,
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           password: password,
//         },
//       });
//       console.log('User created:', response);
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

const docClient = new AWS.DynamoDB.DocumentClient();


export const createUser = async (userObj, cognitoUserId) => {
    const { firstName, lastName, username, password, email } = userObj;
    // console.log(cognitoUserId)
    // Generate userId here or get it from somewhere else

    const params = {
      TableName: "WhereTo",
      Item: {
        PK: `USER#${cognitoUserId}`,
        SK: `GROUP#Default`,
        username: username,
        userID: cognitoUserId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password // Storing passwords directly is not recommended. Hash the password before storing.
      }
    };

    try {
      await docClient.put(params).promise();
      console.log(`User with ID: ${cognitoUserId} and Username: ${username} added.`);
    } catch (err) {
      console.error("Unable to add user", JSON.stringify(err, null, 2));
    }
  };

