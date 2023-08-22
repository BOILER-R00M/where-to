import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const locations = fetchGroupLocations(groupId);

	// TODO:
	// [ ] change how the page layout looks on mobile

	return (
		<div className="h-screen grid grid-cols-[3fr,5fr] lg:grid-cols-[1fr,5fr] bg-primary">
			<ul className="overflow-y-auto border-r border-tertiary">
				{locations.map((location, sk) => {
					return <LocationCard location={location} key={sk} />;
				})}
			</ul>
			<div className="flex flex-col items-center justify-center bg-gray-300">
				<Map />
			</div>
		</div>
	);
};
export default GroupSpace;

function Map() {
	// You can set the initial coordinates and zoom level here
	const position = [51.505, -0.09];
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
