import React from "react";
import { useNavigate } from "react-router-dom";

// TODO:
// [ ] update style to match figma

const GroupListItem = ({ group }) => {
	const navigate = useNavigate();
	return (
		<li
			className="border cursor-pointer p-6 text-primary bg-slate-100 hover:bg-slate-400 transition rounded-lg"
			onClick={() => {
				navigate(`/groupspace/${group.groupId}`);
			}}
		>
			<p className="font-bold">{group.groupName}</p>
		</li>
	);
};

export default GroupListItem;
