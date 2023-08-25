import React from "react";
import { useState } from "react";
const UserListItem = ({ user, setHighlightedUser, highlightedUser }) => {
	const handleHighlightUser = () => {
		if (highlightedUser && highlightedUser.userId === user.userId) {
			setHighlightedUser(null);
		} else {
			setHighlightedUser(user);
		}
	};
	return (
		<div
			onClick={handleHighlightUser}
			className={`mx-auto cursor-pointer ${
				highlightedUser && highlightedUser.userId === user.userId
					? "text-secondary"
					: "text-tertiary"
			} hover:text-secondary transition`}
		>
			{user.username}
		</div>
	);
};

export default UserListItem;
