import React from "react";
import plusIcon from "../../../assets/plusIcon.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import upArrow from "../../../assets/doubleUp.svg";
import downArrow from "../../../assets/doubleDown.svg";
import UserListItem from "./UserListItem";
import { useState } from "react";
import { a } from "framer-motion"
const UserList = ({ users, groupId, setHighlightedUserLocations }) => {
	const [isExtended, setIsExtended] = useState(false);
	const handleExtension = () => {
		setIsExtended((prev) => !prev);
	};

	const [highlightedUser, setHighlightedUser] = useState(null);

	return (
		<div className="absolute m-3 z-50 right-0 flex flex-row  items-center">
			<div className="mr-3 border p-1 rounded-full bg-primary hover:bg-secondary transition cursor-pointer">
				<img src={plusIcon} className="w-3" alt="" />
			</div>
			<div className="border py-3 px-6 flex flex-col bg-primary min-w-[20rem] rounded w-full">
				<div className="mx-auto">
					Users:{" "}
					<strong className="text-secondary">{users.length}</strong>
				</div>
				{isExtended && (
					<div className="flex flex-col">
						<div className="w-full py-4 flex flex-row border-b">
							<input type="text" className="w-full ml-4" />
							<img
								src={searchIcon}
								alt="search"
								className="w-8 mx-4"
							/>
						</div>
						{users.map((user) => {
							return (
								<UserListItem
									key={user.userId}
									user={user}
									groupId={groupId}
									setHighlightedUser={setHighlightedUser}
									highlightedUser={highlightedUser}
									setHighlightedUserLocations={
										setHighlightedUserLocations
									}
								/>
							);
						})}
					</div>
				)}
				<img
					onClick={handleExtension}
					src={isExtended ? upArrow : downArrow}
					className="w-5 m-auto cursor-pointer"
					alt="arrow"
				/>
			</div>
		</div>
	);
};

export default UserList;
