import { createContext, useState, useEffect } from "react";
import { fetchUserGroups } from "../customHooks/useFetchUserGroups";

// TODO: This wasn't working when I tried to use in App.js, not sure why. Maybe set provider at app level

// Create the UserContext with an empty default value.
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
	// just setting up a dummy user for now
	const [authUser, setAuthUser] = useState({
		pk: "USER#0001",
		username: "MadisonEvans94",
		userID: "0001",
	});

	// Setting dummy userid for now
	const [authUid, setAuthUid] = useState("");
	const [userGroups, setUserGroups] = useState([]);

	useEffect(() => {
		if (authUser) {
			setAuthUid(authUser.userID);
		}
	}, [authUser]);

	useEffect(() => {
		if (authUid) {
			const userGroups = fetchUserGroups(authUid);
			setUserGroups(userGroups);
		}
	}, [authUid]);

	return (
		<UserContext.Provider
			value={{ authUser, setAuthUser, authUid, setAuthUid, userGroups }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
