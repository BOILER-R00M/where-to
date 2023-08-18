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
			<div className="bg-gray-300 flex flex-col items-center justify-center">
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
		<li className="text-center border-b py-4 cursor-pointer hover:bg-gray-200">
			{location.locationName}
		</li>
	);
}
