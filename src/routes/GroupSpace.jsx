import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import LocationCard from "../components/pages/groupspace/LocationCard";

// TODO:
// [x] Add state that allows map component to hold locations via lat/lng metadata
// [x] render the locations on the map with a  pin or dot or some other kind of indicator
// [ ] separate sub components into their own files
// [ ] when user clicks on location from the side bar, it should move to that location
// [ ] change how the page layout looks on mobile

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);

	useEffect(() => {
		setLocations(fetchGroupLocations(groupId));
	}, []);

	return (
		<div className="h-screen grid grid-cols-[3fr,5fr] lg:grid-cols-[1fr,5fr] bg-primary">
			<ul className="overflow-y-auto border-r border-tertiary">
				{locations
					? locations.map((location, sk) => {
							return (
								<LocationCard location={location} key={sk} />
							);
					  })
					: "Loading locations..."}
			</ul>
			<div className="flex flex-col items-center justify-center bg-gray-300">
				<Map locations={locations} />
			</div>
		</div>
	);
};
export default GroupSpace;
