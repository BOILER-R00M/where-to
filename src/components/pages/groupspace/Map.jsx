import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import markerHighlighted from "../../../assets/markerHighlighted.svg";
import markerDefault from "../../../assets/markerDefault.svg";

const icondDefault = L.icon({
	iconUrl: markerDefault,
	iconSize: [38, 95],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76],
	shadowSize: [68, 95],
	shadowAnchor: [22, 94],
	tooltipAnchor: [22, 94],
});
const iconHighlighted = L.icon({
	iconUrl: markerHighlighted,
	iconSize: [38, 95],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76],
	shadowSize: [68, 95],
	shadowAnchor: [22, 94],
	tooltipAnchor: [22, 94],
});
const Map = ({
	locations,
	highlightedUserLocations,
	zoom = 5,
	center = [39.8283, -98.5795],
}) => {
	const handleLocationClick = (newPosition, newZoom) => {
		mapRef.current.setView(newPosition, newZoom);
	};

	useEffect(() => {}, [highlightedUserLocations]); //

	return (
		<MapContainer
			center={center}
			zoom={zoom}
			style={{ height: "100%", width: "100%", zIndex: 0 }}
			whenCreated={(mapInstance) => {
				mapRef.current = mapInstance;
			}}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{highlightedUserLocations ? (
				<MarkerList
					locations={highlightedUserLocations}
					highlight={true}
				/>
			) : (
				<MarkerList locations={locations} highlight={false} />
			)}
		</MapContainer>
	);
};

export default Map;

const MarkerList = ({ locations, highlight }) => {
	return (
		<>
			{locations &&
				locations.map((location) => (
					<Marker
						// TODO: using sk for mapping but should create Location ID and update database accordingly
						key={location.SK}
						position={[
							location.coordinates.lat,
							location.coordinates.lng,
						]}
						icon={highlight ? iconHighlighted : icondDefault}
					>
						<Tooltip permanent={false}>
							<div
								style={{
									background: "white",
									border: "1px solid black",
									padding: "5px",
								}}
								className="border border-gray-300 bg-white"
							>
								<ul>
									{Object.entries(location.score).map(
										([key, value]) => (
											<li key={key}>
												{key}: {value}
											</li>
										)
									)}
								</ul>
							</div>
						</Tooltip>
					</Marker>
				))}
		</>
	);
};
