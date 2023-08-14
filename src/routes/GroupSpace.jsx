import React from "react";
import { useParams } from "react-router-dom";

const GroupSpace = () => {
	const { groupId } = useParams();
	return <div>{groupId}</div>;
};

export default GroupSpace;
