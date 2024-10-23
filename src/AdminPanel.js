import React, { useState } from "react";
import { FaUserPlus, FaUsers, FaMapMarkedAlt, FaEye, FaUsersCog, FaClipboardList } from "react-icons/fa"; // Import icons

import CreateAgent from "./components/CreateAgent";
import ViewAgents from "./components/ViewAgents";
import CreateGuide from "./components/CreateGuide";
import ViewGuides from "./components/ViewGuides";
import ViewUsers from "./components/ViewUsers";
import ViewPackages from "./components/ViewPackages";

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState("createAgent");

  const renderContent = () => {
    switch (activeMenu) {
      case "createAgent":
        return <CreateAgent />;
      case "viewAgents":
        return <ViewAgents />;
      case "createGuide":
        return <CreateGuide />;
      case "viewGuides":
        return <ViewGuides />;
      case "viewUsers":
        return <ViewUsers />;
      case "viewPackages":
        return <ViewPackages />;
      default:
        return <CreateAgent />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "createAgent" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("createAgent")}
          >
            <FaUserPlus className="inline mr-2" /> Create Agent
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "viewAgents" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("viewAgents")}
          >
            <FaUsers className="inline mr-2" /> View Agents
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "createGuide" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("createGuide")}
          >
            <FaMapMarkedAlt className="inline mr-2" /> Create Guide
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "viewGuides" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("viewGuides")}
          >
            <FaEye className="inline mr-2" /> View Guides
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "viewUsers" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("viewUsers")}
          >
            <FaUsersCog className="inline mr-2" /> View Users
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-700 cursor-pointer ${
              activeMenu === "viewPackages" && "bg-gray-700"
            }`}
            onClick={() => setActiveMenu("viewPackages")}
          >
            <FaClipboardList className="inline mr-2" /> View Packages
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;
