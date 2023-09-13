import { useState } from "react";
import { Link } from "react-router-dom";
import dropDown from "../../assets/dropDown.svg";
import useAuthorization from "../../customHooks/useAuthService";
import NavLink from "../utility/NavLink";
const navLinks = [
	{ label: "Contact", action: "/contact" },
	{ label: "Settings", action: "/settings" },
	{ label: "Log out", action: "logout" },
];

const NavBar = ({ userName }) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const { userData } = useAuthorization();

	return (
		<nav className="bg-secondary box-border flex items-center justify-between w-full p-5 text-white bg-gray-800">
			<Link
				to="/"
				className="text-2xl font-bold transition-colors text-primary hover:text-gray-300"
			>
				WhereTo
			</Link>

			<div className="hidden lg:flex flex-row">
				<NavLink label={userData?.userName} action="/profile" />
				{navLinks.map((link, index) => (
					<NavLink key={index} {...link} />
				))}
			</div>

			<ul className="relative flex gap-4 lg:hidden">
				<li onClick={() => setDropdownOpen(!isDropdownOpen)}>
					<img
						src={dropDown}
						alt="Dropdown Icon"
						className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-80"
					/>
					{isDropdownOpen && (
						<div className="absolute right-0 z-50 w-48 py-2 mt-2 shadow-xl text-primary bg-tertiary top-full">
							<NavLink label={userName} action="/profile" />
							{navLinks.map((link, index) => (
								<NavLink key={index} {...link} />
							))}
						</div>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
