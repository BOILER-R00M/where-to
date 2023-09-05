import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import Display from "../components/utility/Display";
import GroupListItem from "../components/pages/dashboard/GroupListItem";
import Button from "../components/utility/Button";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import NavBar from "../components/ui/NavBar";
import useAuthorization from "../customHooks/useAuthService";

// TODO:
// [x] Add username to welcome Display message

const Dashboard = () => {
	const { userId } = useParams();
	const { fetchUserGroups } = useDatabaseService();
	const groups = fetchUserGroups(userId);
	const { user } = useContext(AppContext);
	const { userData } = useAuthorization();

	return (
		<>
			<NavBar userName={user?.userName} />
			<DashboardLayout
				groupList={<GroupList groups={groups} />}
				userName={userData?.userName}
			/>
		</>
	);
};

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ userName, groupList }) => {
	return (
		<div className="relative h-screen px-20 bg-primary md:px-6 lg:px-12">
			{/* <Display className="py-4 text-secondary">Welcome Back,</Display>
      <Display className="py-4 text-secondary">{userName}</Display> */}
			{groupList}
			<button className="fixed flex items-center justify-center w-16 h-16 text-2xl rounded-full bottom-4 text-primary bg-tertiary right-4">
				+
			</button>
		</div>
	);
};

// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	useEffect(() => {
		console.log("FETCHING USER TEST");
		fetch(
			"https://b5vaajxtmj.execute-api.us-east-1.amazonaws.com/production/users"
		);
	}, []);
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
