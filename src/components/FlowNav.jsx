import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function FlowNav() {
   return (
      <Navbar fluid={true} rounded={true}>
         <Navbar.Brand to="/navbars">
            <img
               src="img/parking.png"
               className="mr-3 w-9 h-9"
               alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
               Parclick
            </span>
         </Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive
                     ? "sm:text-blue-600  sm:bg-white bg-blue-600 text-white px-2 py-2 rounded-md "
                     : "px-2 py-2"
               }
            >
               Home
            </NavLink>
            <NavLink
               to="/parking"
               className={({ isActive }) =>
                  isActive
                     ? "sm:text-blue-600 sm:bg-white bg-blue-600 text-white px-2 py-2 rounded-md"
                     : "px-2 py-2"
               }
            >
               Parking
            </NavLink>
            <NavLink
               to="/history"
               className={({ isActive }) =>
                  isActive
                     ? "sm:text-blue-600 sm:bg-white bg-blue-600 text-white px-2 py-2 rounded-md"
                     : "px-2 py-2"
               }
            >
               History
            </NavLink>
            <NavLink
               to="/detail"
               className={({ isActive }) =>
                  isActive
                     ? "sm:text-blue-600 sm:bg-white bg-blue-600 text-white px-2 py-2 rounded-md"
                     : "px-2 py-2"
               }
            >
               Detail
            </NavLink>
         </Navbar.Collapse>
      </Navbar>
   );
}
