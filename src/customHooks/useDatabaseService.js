import React from "react";
import db from "../seedData/fakeDynamoDB.json";

// TODO: Once we are ready to integrate with backend, we will need to change all of these functions to instead send requests to our api gateway
// [ ] need error logic to handle when a user fetches a resource that doesn't exist yet

const useDatabaseService = () => {
	// Query the mock database to get the list of groups for a specific user
	const fetchUserGroups = (userId) => {
		return db.filter(
			(item) =>
				item.pk === `USER#${userId}` && item.sk.startsWith("GROUP#")
		);
	};

	// Query the mock database to get the list of locations for a specific group
	const fetchGroupLocations = (groupId) => {
		return db.filter(
			(item) =>
				item.pk === `GROUP#${groupId}` &&
				item.sk.startsWith("LOCATION#")
		);
	};

	// Query the mock database to get the list of locations a specific user in a group has been to
	const fetchUserLocationsInGroup = (groupId, userId) => {
		return db.filter(
			(item) =>
				item.pk === `GROUP#${groupId}#USER#${userId}` &&
				item.sk.startsWith("LOCATION#")
		);
	};

	return {
		fetchUserGroups,
		fetchGroupLocations,
		fetchUserLocationsInGroup,
	};
};

export default useDatabaseService;
