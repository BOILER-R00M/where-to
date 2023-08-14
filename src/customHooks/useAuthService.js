import React from "react";

const useAuthService = () => {
	// TODO: all auth logic for sign up, log in, and log out will be handled here

	// Logic to sign up a user with Cognito
	const signUp = (email, password, attributes) => {};

	// Logic to authenticate a user with Cognito
	const logIn = (email, password, callback) => {};

	// Logic to log out a user from Cognito
	const logOut = () => {};

	// Logic to confirm user's sign up with Cognito
	const confirmSignUp = (username, code) => {};

	// Logic to initiate password reset with Cognito
	const forgotPassword = (username) => {};

	// Logic to reset user's password with Cognito
	const resetPassword = (username, code, newPassword) => {};

	return {
		signUp,
		logIn,
		logOut,
		confirmSignUp,
		forgotPassword,
		resetPassword,
	};
};

export default useAuthService;
