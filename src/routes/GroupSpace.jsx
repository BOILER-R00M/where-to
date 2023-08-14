import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const locations = fetchGroupLocations(groupId);

	return (
		<div className="border h-screen grid grid-cols-[1fr,5fr]">
			<ul className="overflow-y-auto">
				{locations.map((location, i) => {
					return (
						<li
							className="text-center border-b py-4 cursor-pointer hover:bg-gray-200"
							key={i}
						>
							{location.locationName}
						</li>
					);
				})}
			</ul>
			<div className="bg-gray-300 flex flex-col items-center justify-center">
				<div>map goes here</div>
			</div>
		</div>
	);
};

export default GroupSpace;
