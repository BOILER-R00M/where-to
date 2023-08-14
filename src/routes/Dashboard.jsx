import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import { useNavigate } from "react-router-dom";

// FIXME: The styling for this route is temporary until we figure out styles from figma

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ headerText, groupList }) => {
	return (
		<>
			<Header className="my-4">{headerText}</Header>
			<div className="grid grid-cols-2">
				<div className="w-full">{groupList}</div>
				<div className="w-full">some other component... idk yet</div>
			</div>
		</>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	const navigate = useNavigate();
	return (
		<>
			<Header>Your Groups</Header>
			<ul>
				{groups.map((group, i) => {
					return (
						<>
							<li
								key={i}
								className="border cursor-pointer"
								onClick={() => {
									navigate(`/groupspace/${group.groupId}`);
								}}
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
		<DashboardLayout
			groupList={<GroupList groups={groups} />}
			headerText="Welcome back"
		>
			{/* sub componenets of the dashboard route go here */}
		</DashboardLayout>
	);
};

export default Dashboard;
