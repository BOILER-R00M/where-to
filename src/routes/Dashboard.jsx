import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import Display from "../components/utility/Display";
import GroupListItem from "../components/pages/dashboard/GroupListItem";
import Button from "../components/utility/Button";

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ displayText, groupList }) => {
	return (
		<div className="px-4 bg-primary h-screen">
			<Display className="py-4 text-tertiary">{displayText}</Display>
			<div className="grid grid-cols-1">
				<div className="w-full">{groupList}</div>
			</div>
		</div>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	return (
		<>
			<Header className="pt-6 pb-3 text-tertiary">Your Groups</Header>
			<div className="border border-tertiary rounded-lg bg-none p-3 flex flex-col">
				<ul className="grid grid-col gap-3 rounded-lg">
					{groups.map((group) => {
						return <GroupListItem key={group.sk} group={group} />;
					})}
				</ul>
				<Button className="mt-3">Create New Group</Button>
			</div>
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
		/>
	);
};

export default Dashboard;
