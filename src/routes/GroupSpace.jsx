import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";

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
	return <div>map goes here</div>;
}

function LocationCard({ location }) {
	return (
		<li className="py-4 text-center border-b border-tertiary cursor-pointer hover:bg-gray-200">
			{location.locationName}
		</li>
	);
}
