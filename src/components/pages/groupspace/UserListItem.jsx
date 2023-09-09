import React from "react";
import { useEffect } from "react";
import useDatabaseService from "../../../customHooks/useDatabaseService";
const UserListItem = ({
	user,
	setHighlightedUser,
	highlightedUser,
	setHighlightedUserLocations,
	groupId,
}) => {
	const { fetchLocationsVisitedByUser } = useDatabaseService();

	const fetchData = async () => {
		const visitedLocations = await fetchLocationsVisitedByUser(
			user.groupId,
			user.userId
		);
		console.log("VISITED LOCATIONS: ", visitedLocations);
	};

	const handleHighlightUser = () => {
		if (highlightedUser && highlightedUser.userId === user.userId) {
			setHighlightedUser(null);
		} else {
			setHighlightedUser(user);
			fetchData();
		}
	};
	return (
		<div
			onClick={handleHighlightUser}
			className={`mx-auto cursor-pointer ${
				highlightedUser && highlightedUser.userId === user.userId
					? "text-secondary"
					: "text-tertiary"
			} transition`}
		>
			{user.username}
		</div>
	);
};

export default UserListItem;
