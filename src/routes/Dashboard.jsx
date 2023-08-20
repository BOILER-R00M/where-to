import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import Display from "../components/utility/Display";
import { useNavigate } from "react-router-dom";

// TODO: The styling for this route is temporary until we figure out styles from figma

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ displayText, groupList }) => {
	return (
		<>
			<Display className="my-4">{displayText}</Display>
			<div className="grid grid-cols-1">
				<div className="w-full">{groupList}</div>
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
								className="border cursor-pointer py-6 my-2 bg-slate-100 hover:bg-slate-400 transition"
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
			displayText="Welcome back"
		>
			{/* sub componenets of the dashboard route go here */}
		</DashboardLayout>
	);
};

export default Dashboard;
