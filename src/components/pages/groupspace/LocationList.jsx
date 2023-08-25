import React from "react";
import upArrow from "../../../assets/doubleUp.svg";
import downArrow from "../../../assets/doubleDown.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import LocationCard from "./LocationCard";
import { useState } from "react";

const LocationList = ({ locations }) => {
	const [isListHidden, setIsListHidden] = useState(true);
	const handleShowList = () => {
		setIsListHidden((prev) => !prev);
	};
	return (
		<div
			className={`transition-all duration-300 ease-in-out border-tertiary bg-primary z-50 absolute border overflow-y-auto ${
				isListHidden ? "-bottom-[336px]" : "-bottom-0"
			} w-full bg-white lg:border-t-0 lg:overflow-y-auto lg:static h-[400px] lg:h-auto`}
		>
			<div className="border-b h-16 flex lg:hidden">
				<img
					onClick={handleShowList}
					className="m-auto w-8 cursor-pointer text-secondary"
					src={isListHidden ? upArrow : downArrow}
					alt="arrow"
				/>
			</div>
			<div className="w-full py-4 flex flex-row border-b">
				<input type="text" className="w-full ml-4" />
				<img src={searchIcon} alt="search" className="w-8 mx-4" />
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

export default LocationList;
