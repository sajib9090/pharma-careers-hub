import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar bg-base-100 max-w-7xl mx-auto md;px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#9873FF]"
            >
              <li>
                <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-black underline": ""}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/appliedJob" className={({ isActive }) => isActive ? "text-black underline": ""}>Applied Job</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-black underline": ""}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-3xl text-[#1A1919]">pharmaCareersHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#9873FF]">
            <li>
              <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-black underline": ""}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/appliedJob" className={({ isActive }) => isActive ? "text-black underline": ""}>Applied Job</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "text-black underline": ""}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn capitalize bg-gradient-to-r from-[#9873FF] border-none">Start Applying</a>
        </div>
      </div>
  );
};

export default Navbar;
