import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDatabaseService from "../customHooks/useDatabaseService";
import "leaflet/dist/leaflet.css";
import Map from "../components/pages/groupspace/Map";
import LocationCard from "../components/pages/groupspace/LocationCard";
import upArrow from "../assets/doubleUp.svg";
import downArrow from "../assets/doubleDown.svg";
import searchIcon from "../assets/searchIcon.svg";
import addLocationIcon from "../assets/addLocationIcon.svg";
import plusIcon from "../assets/plusIcon.svg";

// TODO:
// [x] change how the page layout looks on mobile
// [x] Add state that allows map component to hold locations via lat/lng metadata
// [x] render the locations on the map with a  pin or dot or some other kind of indicator
// [x] refactor sub components into their own files
// [x] add search bar to location list
// [x] add an "Add Location" action button
// [ ] users list widget. Create fully with the extended dropdown functionality
// [ ] create a form modal for the add location functionality
// [ ] make the number that appears in UsersLists dynamic
// [ ] add filtering functionality to search bar
// [ ] when user clicks on location from the side bar, it should move to that location

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const [locations, setLocations] = useState(null);

	useEffect(() => {
		setLocations(fetchGroupLocations(groupId));
	}, []);

	return (
		<div className="h-screen lg:grid lg:grid-cols-[300px,5fr] bg-primary relative">
			<LocationList locations={locations} />
			<UsersList />
			<div className="flex relative flex-col items-center justify-center bg-gray-300 h-full lg:h-auto">
				<div className="cursor-pointer absolute border z-50 left-0 mx-3 top-0 mt-36 p-2 rounded bg-primary hover:bg-secondary transition">
					<img
						src={addLocationIcon}
						alt="location"
						className="w-10"
					/>
				</div>
				<Map locations={locations} />
			</div>
		</div>
	);
};

export default GroupSpace;

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
const UsersList = () => {
	const [isExtended, setIsExtended] = useState(false);
	const handleExtension = () => {
		setIsExtended((prev) => !prev);
	};
	return (
		<div className="absolute m-3 z-50 right-0 flex flex-row items-center">
			<div className="mr-3 border p-1 rounded-full bg-primary hover:bg-secondary transition cursor-pointer">
				<img src={plusIcon} className="w-3" alt="" />
			</div>
			<div className="border py-3 px-6 flex flex-col bg-primary rounded">
				<div className="mx-auto">
					Users: <strong>3</strong>
				</div>
				{isExtended && (
					<div>
						<div className="w-full py-4 flex flex-row border-b">
							<input type="text" className="w-full ml-4" />
							<img
								src={searchIcon}
								alt="search"
								className="w-8 mx-4"
							/>
						</div>
						<div>Madison</div>
						<div>Keino</div>
						<div>Gehrig</div>
					</div>
				)}
				<img
					onClick={handleExtension}
					src={isExtended ? upArrow : downArrow}
					className="w-5 m-auto cursor-pointer"
					alt="arrow"
				/>
			</div>
		</div>
	);
};
