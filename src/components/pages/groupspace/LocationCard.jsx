import React from "react";

const LocationCard = ({ location }) => {
	return (
		<li className="py-4 text-center border-b cursor-pointer hover:bg-gray-200">
			{location?.locationName}
		</li>
	);
};

export default LocationCard;
