import useDatabaseService from "../customHooks/useDatabaseService";
import Header from "../components/utility/Header";
import { useState, useEffect } from "react";
import GroupListItem from "../components/pages/dashboard/GroupListItem";
import Button from "../components/utility/Button";
import useAuthorization from "../customHooks/useAuthService";
import GroupCard from "../components/ui/GroupCard";

const Dashboard = ({showGroupForm, setShowGroupForm}) => {
	const { fetchUserGroups } = useDatabaseService();
	const [groups, setGroups] = useState([]); // Initial state set to an empty array
	const { userData } = useAuthorization();


	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUserGroups(userData.userId);
				setGroups(data);
			} catch (error) {
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			}
		};
		

		fetchData();
	}, [userData]); // Re-run the effect when userId changes

	return (
		<DashboardLayout
			groupList={<GroupList groups={groups} />}
			userName={userData?.username}
			showGroupForm={showGroupForm}
			setShowGroupForm={setShowGroupForm}
		/>
		
	);
};

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ userName, groupList, setShowGroupForm, showGroupForm }) => {
    
    return (
        <div className="relative h-screen px-20 bg-primary md:px-6 lg:px-12">
            {groupList}
            <button 
                onClick={() => setShowGroupForm(prev => !prev)} 
                className="fixed flex items-center justify-center w-16 h-16 text-2xl rounded-full bottom-4 text-primary bg-tertiary right-4 z-10">
                +
            </button>
            {showGroupForm ? (
                <>
                    <div 
                        className="fixed inset-0 bg-black opacity-50 z-20" 
                        onClick={() => setShowGroupForm(false)} 
                    ></div>
                    
                        <GroupCard />
                  
                </>
            ) : null}
        </div>
    );
};



// Sub component responsible for displaying the list of groups that a user belongs to
const GroupList = ({ groups }) => {
	return (
		<div className="flex flex-col">
			<Header className="pt-6 pb-3 text-tertiary">Your Groups</Header>
			<div className="border border-tertiary rounded-lg bg-none p-3 flex flex-col">
				{groups && (
					<ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
						{groups?.map((group) => {
							console.log(group.PK)
							return (
								<GroupListItem key={group.PK} group={group} />
							);
						})}
					</ul>
				)}
				<Button className="mt-3">Create New Group</Button>
			</div>
		</div>
	);
};

export default Dashboard;
