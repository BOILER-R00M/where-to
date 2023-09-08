import { Link } from "react-router-dom";
import useAuthorization from "../../customHooks/useAuthService";

const NavLink = ({ label, action = null, linkTo = "/" }) => {
	const { logout } = useAuthorization();
	const handleNavAction = (action) => {
		if (action === "logout") {
			logout();
		}
	};
	if (action === "logout") {
		return (
			<button
				onClick={() => handleNavAction(action)}
				className="block px-4 my-auto text-gray-800 text-primary hover:bg-indigo-500 hover:text-white"
			>
				{label}
			</button>
		);
	}

	return (
		<Link
			to={linkTo}
			className="block px-4 my-auto text-gray-800 text-primary hover:bg-indigo-500 hover:text-white"
		>
			{label}
		</Link>
	);
};
export default NavLink;
