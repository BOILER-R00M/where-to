import React from "react";
import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const locations = fetchGroupLocations(groupId);

	return (
		<div>
			{locations.map((location) => {
				return (
					<>
						<p>{location.locationName}</p>
					</>
				);
			})}
		</div>
	);
};

export default GroupSpace;
