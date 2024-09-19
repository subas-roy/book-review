import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
    <li><NavLink to={"/pages-to-read"}>Pages to Read</NavLink></li>
    <li><NavLink to={"/about-us"}>About Us</NavLink></li>
    <li><NavLink to={"/Contact"}>Contact</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 work-sans py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-3xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end font-semibold">
        <a className="btn bg-[#23BE0A] mr-4 text-white text-lg">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white text-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;