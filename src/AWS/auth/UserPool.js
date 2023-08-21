import { CognitoUserPool } from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: 'us-east-1_AwLxNtsIs',
    ClientId: '7g46ivshf6j3db7thureu2btla'
}

export default new CognitoUserPool(poolData);
