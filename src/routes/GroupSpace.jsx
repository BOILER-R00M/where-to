import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import LocationCard from "../components/pages/groupspace/LocationCard";

// TODO:
// [ ] change how the page layout looks on mobile
// [x] Add state that allows map component to hold locations via lat/lng metadata
// [x] render the locations on the map with a  pin or dot or some other kind of indicator
// [x] refactor sub components into their own files
// [ ] when user clicks on location from the side bar, it should move to that location
// [ ] when user clicks on location from the side bar, after zooming to location, there should be a window that pops up that shows locations metadata (score and list of users who scored it)
// [ ] add search bar to location list

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);

	useEffect(() => {
		setLocations(fetchGroupLocations(groupId));
	}, []);

	return (
		<div className="h-screen lg:grid lg:grid-cols-[1fr,5fr] bg-primary relative">
			<LocationList locations={locations} />

			<div className="flex flex-col items-center justify-center bg-gray-300 h-full lg:h-auto">
				<Map locations={locations} />
			</div>
		</div>
	);
};

export default GroupSpace;
function LocationList({ locations }) {
	return (
		<ul className="border overflow-y-auto z-50 absolute bottom-0 w-full bg-white lg:overflow-y-auto lg:static h-32 lg:h-auto">
			{locations
				? locations.map((location, sk) => {
						return <LocationCard location={location} key={sk} />;
				  })
				: "Loading locations..."}
		</ul>
	);
}
