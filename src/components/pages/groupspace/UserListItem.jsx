import React from "react";
import useDatabaseService from "../../../customHooks/useDatabaseService";
const UserListItem = ({
	user,
	setHighlightedUser,
	highlightedUser,
	setHighlightedUserLocations,
}) => {
	const { fetchLocationsVisitedByUser } = useDatabaseService();

	const fetchData = async () => {
		const visitedLocations = await fetchLocationsVisitedByUser(
			user.groupId,
			user.userId
		);
		console.log(
			`${user.username} has visited these locations: `,
			visitedLocations,
			`USER ID USED IN GET REQ: ${user.userId}`,
			`GROUP ID USED IN GET REQ: ${user.groupId}`
		);
		setHighlightedUserLocations(visitedLocations);
	};

	const handleHighlightUser = () => {
		if (highlightedUser && highlightedUser.userId === user.userId) {
			setHighlightedUserLocations(null);
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
