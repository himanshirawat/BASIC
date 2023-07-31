// Sidebar.js
import React, { useState } from 'react';
import logo from "../assests/image 16.png";
import "./style.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>  {!sidebarOpen ? (
      <button className="sm:hidden flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50" onClick={() => setSidebarOpen(sidebarOpen)}>x</button>
    ) : (
    <div className="hidden sm:block py-4 text-white w-48 h-screen rounded-xl" style={{background:"linear-gradient(#FF588C, #F9B9C5, #FD4780)"}}>
    <div className="flex items-center justify-center mb-8 absolute w-40 h-30 mt-3 ml-3">
      <img src={logo} alt="Logo" className="h-30" />
    </div>
    <ul className="items-center mt-60 ml-3">
        <li className="group px-4 py-2 mb-2">
          <i className="fas fa-home mr-2 mb-4"></i> Home
        </li>
        <li className="group px-4 py-2 mb-2">
          <i className="fas fa-user mr-2 mb-4 "></i> Profile
        </li>
        <li className="group px-4 py-2 mb-2">
          <i className="fas fa-sign-out-alt mr-2 mb-4"></i> Logout
        </li>
      </ul>
  </div>
    )}
  </>

  );
};

export default Sidebar;

