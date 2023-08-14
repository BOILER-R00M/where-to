import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";

// TODO:
// [ ] update styling with figma styling. Using temp styling for now...

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ header, groupList }) => {
	return (
		<>
			<div>{header}</div>
			<div>{groupList}</div>
		</>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	return (
		<>
			<Header className="text-2xl">Your Groups</Header>
			<ul>
				{groups.map((group, i) => {
					return (
						<>
							<li
								key={i}
								className="border cursor-pointer"
								onClick={() =>
									console.log("navigate to group page")
								}
							>
								{group.groupName}
							</li>
						</>
					);
				})}
			</ul>
		</>
	);
};

const Dashboard = () => {
	const { userId } = useParams();
	const { fetchUserGroups } = useDatabaseService();
	const groups = fetchUserGroups(userId);
	return (
		<DashboardLayout groupList={<GroupList groups={groups} />}>
			{/* sub componenets of the dashboard route go here */}
		</DashboardLayout>
	);
};

export default Dashboard;
