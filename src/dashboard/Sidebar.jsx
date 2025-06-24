import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaHome,
  FaUser,
  FaChalkboardTeacher,
  FaBook,
  FaMoneyBill,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
  const [showMobileMenu, setShowMobileMenu] = useState(false); // mobile open

  const handleCollapse = () => setIsCollapsed(!isCollapsed);
  const handleMobileToggle = () => setShowMobileMenu(!showMobileMenu);

  // menu links with paths
  const menuLinks = [
    { icon: <FaHome />, text: "Dashboard", path: "/dashboard" },
    { icon: <FaUser />, text: "Students", path: "/students" },
    { icon: <FaChalkboardTeacher />, text: "Teachers", path: "/teachers" },
    { icon: <FaBook />, text: "Courses", path: "/courses" },
    { icon: <FaMoneyBill />, text: "Payments", path: "/payments" },
    { icon: <FaCog />, text: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, text: "Logout", path: "/logout", danger: true },
  ];

  return (
    <>
      {/* mobile top bar */}
      <div className="md:hidden flex justify-between items-center bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold">AccentPilot</h1>
        <button onClick={handleMobileToggle}>
          {showMobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white shadow-lg z-50 transition-transform duration-300
        ${showMobileMenu ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:block 
        ${isCollapsed ? "w-20" : "w-64"}`}
      >
        {/* brand and collapse button */}
        <div className="flex justify-between items-center p-4 border-b border-blue-800">
          {!isCollapsed && <h2 className="text-xl font-bold">AccentPilot</h2>}
          <button
            className="hidden md:block text-white"
            onClick={handleCollapse}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        {/* menu links */}
        <nav className="flex flex-col space-y-3 p-4 text-base">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center gap-3 hover:bg-blue-800 p-2 rounded ${
                link.danger ? "text-red-300 hover:text-white" : ""
              }`}
              onClick={() => setShowMobileMenu(false)} // auto close in mobile
            >
              {link.icon}
              {!isCollapsed && <span>{link.text}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
