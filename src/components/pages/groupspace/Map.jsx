import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useEffect } from "react";
const Map = ({ locations, highlightedUserLocations }) => {
	// center of US as default starting point
	const zoom = 5;
	const position = [39.8283, -98.5795];
	useEffect(() => {}, [highlightedUserLocations]); //
	console.log("ALL LOCATIONS", locations);

	return (
		<MapContainer
			center={position}
			zoom={zoom}
			style={{ height: "100%", width: "100%", zIndex: 0 }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{highlightedUserLocations ? (
				<></>
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
									{Object.entries(location.averageScore).map(
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
