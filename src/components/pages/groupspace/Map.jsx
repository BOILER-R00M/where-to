import React from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";

const Map = ({ locations }) => {
	// center of US as default starting point
	const zoom = 5;
	const position = [39.8283, -98.5795];

	const handleMarkerClick = (location) => {
		console.log(location);
	};

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
			{locations &&
				locations.map((location) => {
					return (
						<div key={location.sk}>
							<Circle
								center={[
									location.coordinates.lat,
									location.coordinates.lng,
								]}
								radius={20}
							/>
							<Marker
								position={[
									location.coordinates.lat,
									location.coordinates.lng,
								]}
								eventHandlers={{
									click: () => handleMarkerClick(location),
								}}
							/>
						</div>
					);
				})}
		</MapContainer>
	);
};

export default Map;
