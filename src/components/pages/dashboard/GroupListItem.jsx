import React from "react";
import { useNavigate } from "react-router-dom";

// TODO:
// [ ] update style to match figma

const GroupListItem = ({ group }) => {
	const navigate = useNavigate();
	return (
		<li
			className="border border-tertiary cursor-pointer p-6 bg-slate-100 rounded-lg hover:bg-secondary hover:text-primary hover:border-secondary transition"
			onClick={() => {
				navigate(`/groupspace/${group.groupId}`);
			}}
		>
			<p className="font-bold">{group.groupName}</p>
		</li>
	);
};

export default GroupListItem;
