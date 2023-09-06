import { useState, useEffect } from "react";
import UserPool from "../AWS/auth/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const useAuthorization = () => {
	const [userData, setUserData] = useState(null);
	const [tokens, setTokens] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const getSession = async () => {
		return await new Promise((resolve, reject) => {
			const user = UserPool.getCurrentUser();
			if (user) {
				user.getSession((err, session) => {
					if (err) {
						console.error(err);
						reject();
					} else {
						resolve(session);
					}
				});
			} else {
				reject();
			}
		});
	};

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				setIsAuthenticated(true);
				setTokens(session.getIdToken().getJwtToken());
				setUserData({
					userId: session.getIdToken().payload["sub"],
					username: session.getIdToken().payload["cognito:username"],
				});
			} else {
				setIsAuthenticated(false);
				setUserData(null);
				setTokens(null);
			}
		});
	}, []);

	const authenticate = async (Username, Password) => {
		return await new Promise((resolve, reject) => {
			const user = new CognitoUser({
				Username,
				Pool: UserPool,
			});

			const authDetails = new AuthenticationDetails({
				Username,
				Password,
			});
			user.authenticateUser(authDetails, {
				onSuccess: (data) => {
					console.log(
						"Username From Cognito Token: ",
						data.accessToken.payload.username,
						"User ID from Cognito Token: ",
						data.idToken.payload.sub
					);
					setTokens(data.getIdToken().getJwtToken());
					setIsAuthenticated(true);
					setUserData({
						userId: data.idToken.payload.sub,
						username: data.accessToken.payload.username,
					});
					resolve(data);
				},
				onFailure: (error) => {
					console.error(error);
					reject(error);
				},
				newPasswordRequired: (data) => {
					console.log("New Password required", data);
					resolve(data);
				},
			});
		});
	};

	const logout = async () => {
		const user = UserPool.getCurrentUser();
		if (user) {
			user.signOut();
			setIsAuthenticated(false);
			setUserData(null);
			setTokens(null);
		}
	};

	return {
		authenticate,
		getSession,
		logout,
		tokens,
		isAuthenticated,
		userData,
	};
};

export default useAuthorization;
