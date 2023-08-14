import React from "react";

// Use DashboardLayout as a layout component that is responsible for structuring the children components only
const DashboardLayout = ({ children }) => {
	return (
		<>
			Dashboard
			<div>{children}</div>
		</>
	);
};

const Dashboard = () => {
	return (
		<DashboardLayout>
			{/* sub componenets of the dashboard route go here */}
		</DashboardLayout>
	);
};

export default Dashboard;
