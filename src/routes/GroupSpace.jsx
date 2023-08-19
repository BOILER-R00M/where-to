import { useParams } from "react-router-dom";
import useDatabaseService from "../customHooks/useDatabaseService";

const GroupSpace = () => {
	const { fetchGroupLocations } = useDatabaseService();
	const { groupId } = useParams();
	const locations = fetchGroupLocations(groupId);

	return (
		<div className="border h-screen grid grid-cols-[1fr,5fr]">
			<ul className="overflow-y-auto">
				{locations.map((location, i) => {
					return <LocationCard location={location} key={i} />;
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
		<li className="py-4 text-center border-b cursor-pointer hover:bg-gray-200">
			{location.locationName}
		</li>
	);
}
