import React from "react";
import db from "../seedData/fakeDynamoDB.json";

// TODO: Once we are ready to integrate with backend, we will need to change all of these functions to instead send requests to our api gateway

const useDatabaseService = () => {
	const fetchUserGroups = (userId) => {
		// Query the mock database to get the list of groups for a specific user
		return db.filter(
			(item) =>
				item.pk === `USER#${userId}` && item.sk.startsWith("GROUP#")
		);
	};

	const fetchGroupLocations = (groupId) => {
		// Query the mock database to get the list of locations for a specific group
		return db.filter(
			(item) =>
				item.pk === `GROUP#${groupId}` &&
				item.sk.startsWith("LOCATION#")
		);
	};

	const fetchUserLocationsInGroup = (groupId, userId) => {
		// Query the mock database to get the list of locations a specific user in a group has been to
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
