import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";

// TODO:
// [ ] Add state that allows map component to hold locations via lat/lng metadata
// [ ] render the locations on the map with a  pin or dot or some other kind of indicator
// [ ] separate sub components into their own files
// [ ] when user clicks on location from the side bar, it should move to that location
// [ ] change how the page layout looks on mobile

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);

	useEffect(() => {
		setLocations(fetchGroupLocations(groupId));
	});

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
				<Map />
			</div>
		</div>
	);
};
export default GroupSpace;

function Map() {
	const position = [33.7488, -84.3877]; // Coordinates for test dot
	const zoom = 13;

	return (
		<MapContainer
			center={position}
			zoom={zoom}
			style={{ height: "100%", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position} />{" "}
			{/* Optional: Adds a marker at the position */}
			<Circle center={position} radius={20} />{" "}
			{/* Adds a dot at the position with a radius of 20 meters */}
		</MapContainer>
	);
}

function LocationCard({ location }) {
	return (
		<li className="py-4 text-center border-b border-tertiary cursor-pointer hover:bg-gray-200">
			{location.locationName}
		</li>
	);
}
