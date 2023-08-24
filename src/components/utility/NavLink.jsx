import { Link } from "react-router-dom";

const NavLink = ({ tailwind = "", textContent = "", linkTo = "/" }) => {
  return (
    <>
      <Link className={tailwind} to={linkTo}>
        {textContent}
      </Link>
    </>
  );
};

export default NavLink;
