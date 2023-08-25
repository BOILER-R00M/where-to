import React from "react";

const UserListItem = ({ user, setHighlightedUser, isHighlighted }) => {
	return (
		<div
			onClick={() => setHighlightedUser(user)}
			className={`mx-auto cursor-pointer ${
				isHighlighted ? "text-secondary" : "text-tertiary"
			} hover:text-secondary transition`}
		>
			{user.username}
		</div>
	);
};

export default UserListItem;
