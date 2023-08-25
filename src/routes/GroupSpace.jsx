import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import LocationCard from "../components/pages/groupspace/LocationCard";
import upArrow from "../assets/doubleUp.svg";
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

const LocationList = ({ locations }) => {
	return (
		<div className="border-tertiary bg-primary z-50 absolute border border-t overflow-y-auto -bottom-[336px] w-full bg-white lg:border-t-0 lg:overflow-y-auto lg:static h-[400px] lg:h-auto">
			<div className="border-b h-16 flex lg:hidden">
				<img className="m-auto w-12" src={upArrow} alt="" />
			</div>
			<ul>
				{locations
					? locations.map((location, sk) => (
							<LocationCard location={location} key={sk} />
					  ))
					: "Loading locations..."}
			</ul>
		</div>
	);
};
