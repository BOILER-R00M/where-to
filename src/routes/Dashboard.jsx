import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import Display from "../components/utility/Display";
import GroupListItem from "../components/pages/dashboard/GroupListItem";
import Button from "../components/utility/Button";
import useAuthorization from "../customHooks/useAuthService";

const Dashboard = () => {
	const { userId } = useParams();
	const { fetchUserGroups } = useDatabaseService();
	const groups = fetchUserGroups(userId);
	const { userData, logout } = useAuthorization();

	console.log("USERDATA", userData);
	return (
		<DashboardLayout
			logout={logout}
			groupList={<GroupList groups={groups} />}
			userName={userData?.username}
		/>
	);
};

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ userName, groupList, logout }) => {
	return (
		<div className="px-3 bg-primary h-screen md:px-6 lg:px-12">
			<Display className="py-4 text-secondary">Welcome Back,</Display>
			<Display className="py-4 text-secondary">{userName}</Display>
			<button onClick={logout} className="p-2 border rounded">
				Logout
			</button>
			{groupList}
		</div>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	return (
		<div className="flex flex-col">
			<Header className="pt-6 pb-3 text-tertiary">Your Groups</Header>
			<div className="border border-tertiary rounded-lg bg-none p-3 flex flex-col">
				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
					{groups.map((group) => {
						return <GroupListItem key={group.sk} group={group} />;
					})}
				</ul>
				<Button className="mt-3">Create New Group</Button>
			</div>
		</div>
	);
};

export default Dashboard;
