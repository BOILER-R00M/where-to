const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    const { email, username, password } = JSON.parse(event.body);


// Hide client id in secrete / .env and pass in variable
    const params = {
        ClientId: '7g46ivshf6j3db7thureu2btla',
        Email: email,
        Username: username,
        Password: password,
    };

    try {
        await cognito.signUp(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Sign-up successful' }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: error.message }),
        };
    }
};



