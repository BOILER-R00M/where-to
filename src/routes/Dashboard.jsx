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

const Dashboard = () => {
	const { userId } = useParams();
	const { fetchUserGroups } = useDatabaseService();
	const groupList = fetchUserGroups(userId);
	return (
		<DashboardLayout>
			{/* sub componenets of the dashboard route go here */}
			<ul>
				{groupList.map((group) => {
					return (
						<>
							<li>{group.groupName}</li>
						</>
					);
				})}{" "}
			</ul>
		</DashboardLayout>
	);
};

export default Dashboard;
