import React, { useState } from "react";
import Logo from "../../assets/bird_2.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DrawerWithNavigation from "../Menu/DrawerWithNavigation";
import { IconButton} from "@mui/material";
import { FiMenu } from "react-icons/fi";




const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Events", link: "/services" },
  { id: 3, name: "News", link: "/news" },
  { id: 4, name: "About", link: "/about" },
];

const DropdownLinks = [
  { id: 1, name: "Concerts", link: "/events/concerts" },
  { id: 2, name: "Festivals", link: "/events/festivals" },
  { id: 3, name: "Theater", link: "/events/theater" },
  { id: 4, name: "Comedy", link: "/events/comedy" },
  { id: 5, name: "Sports", link: "/events/sports" },
  { id: 6, name: "Exhibitions", link: "/events/exhibitions" },
  { id: 7, name: "Conferences", link: "/events/conferences" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-red-500/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            Shopsy
          </Link>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <IconButton onClick={toggleDrawer} variant="text">
              <FiMenu />
              </IconButton>
          </div>

          {/* Search + Cart + Profile (desktop only) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[250px] group-hover:w-[300px] transition-all duration-300 
                  rounded-full border border-gray-300 px-4 py-1 focus:outline-none 
                  focus:border-1 focus:border-red-500 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-red-500 absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Buy/Cart */}
            <button
              onClick={() => alert("This feature is currently not available")}
              className="bg-gradient-to-r from-red-500 to-red-500/40 transition-all duration-200
                text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Buy
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar (desktop only) */}
      <div className="justify-center hidden sm:flex">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-red-500 duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          
          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2">
              <span>Type of events</span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-red-500/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <DrawerWithNavigation open={isDrawerOpen} onClose={closeDrawer} />
      )}

    </div>
  );
};

export default Navbar;
