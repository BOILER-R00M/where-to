import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ children }) => {
	return (
		<>
			<div>{children}</div>
		</>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	return (
		<ul>
			{groups.map((group) => {
				return (
					<>
						<li>{group.groupName}</li>
					</>
				);
			})}{" "}
		</ul>
	);
};

const Dashboard = () => {
	const { userId } = useParams();
	const { fetchUserGroups } = useDatabaseService();
	const groupList = fetchUserGroups(userId);
	return (
		<DashboardLayout>
			{/* sub componenets of the dashboard route go here */}
			<GroupList groups={groupList} />
		</DashboardLayout>
	);
};

export default Dashboard;
