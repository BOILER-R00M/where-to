import useAuthorization from "../../customHooks/useAuthService";
import { useNavigate } from "react-router-dom";

const DropDown = ({ userName }) => {
	const { userData, logout } = useAuthorization();
	const nav = useNavigate();

	return (
		<div className="absolute right-0 z-50 w-48 py-2 mt-2 shadow-xl text-primary bg-tertiary top-full">
			<a
				href="#"
				className="px-4 py-2 text-gray-800 text-primaryblock hover:bg-indigo-500 hover:text-white"
			>
				{userName}
			</a>
			<a
				href="#"
				className="block px-4 py-2 text-gray-800 text-primary hover:bg-indigo-500 hover:text-white"
			>
				Contact
			</a>
			<a
				href="#"
				className="block px-4 py-2 text-gray-800 text-primary hover:bg-indigo-500 hover:text-white"
			>
				Settings
			</a>
			<p
				onClick={() => {
					logout();
					nav("/login");
				}}
				className="cursor-pointer block px-4 py-2 text-gray-800 text-primary hover:bg-indigo-500 hover:text-white"
			>
				Log out
			</p>
		</div>
	);
};

export default DropDown;
