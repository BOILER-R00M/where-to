import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import Display from "../components/utility/Display";
import GroupListItem from "../components/pages/dashboard/GroupListItem";

// TODO: The styling for this route is temporary until we figure out styles from figma
// [x] set page-wide padding that will be reused in other components
// [ ] Refactor out the group list items
// [ ] Replace the button
// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ displayText, groupList }) => {
	return (
		<div className="px-4">
			<Display className="my-4">{displayText}</Display>
			<div className="grid grid-cols-1">
				<div className="w-full">{groupList}</div>
			</div>
		</div>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	console.log("GROUPS", groups);
	return (
		<>
			<Header>Your Groups</Header>
			<ul>
				{groups.map((group) => {
					return <GroupListItem key={group.sk} group={group} />;
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
		<DashboardLayout
			groupList={<GroupList groups={groups} />}
			displayText="Welcome back"
		>
			{/* sub componenets of the dashboard route go here */}
		</DashboardLayout>
	);
};

export default Dashboard;
