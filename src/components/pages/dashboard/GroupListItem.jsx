import React from "react";
import { useNavigate } from "react-router-dom";

const GroupListItem = ({ group }) => {
	const navigate = useNavigate();
	return (
		<li
			className="border cursor-pointer py-6 my-2 bg-slate-100 hover:bg-slate-400 transition"
			onClick={() => {
				navigate(`/groupspace/${group.groupId}`);
			}}
		>
			{group.groupName}
		</li>
	);
};

export default GroupListItem;
