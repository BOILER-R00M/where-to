import React from "react";

const DashboardLayout = ({ children }) => {
	return (
		<>
			<div>{children}</div>
		</>
	);
};

const Dashboard = () => {
	return <DashboardLayout></DashboardLayout>;
};

export default Dashboard;
