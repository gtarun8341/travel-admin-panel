import React, { useState } from "react";

const ViewPackages = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Adventure Tour",
      location: "Grand Canyon",
      price: "$499",
      assignedGuide: "Mike Johnson",
      agentCreated: "Agent Smith",
      capacity: 10,
    },
    {
      id: 2,
      name: "Cultural Exploration",
      location: "Rome, Italy",
      price: "$799",
      assignedGuide: "Sara Connor",
      agentCreated: "Agent Jones",
      capacity: 15,
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">View Packages</h1>

      {/* Table for displaying packages */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Package Name</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Assigned Guide</th>
              <th className="py-2 px-4 border-b">Agent Created</th>
              <th className="py-2 px-4 border-b">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="text-center">
                <td className="py-2 px-4 border-b">{pkg.name}</td>
                <td className="py-2 px-4 border-b">{pkg.location}</td>
                <td className="py-2 px-4 border-b">{pkg.price}</td>
                <td className="py-2 px-4 border-b">{pkg.assignedGuide}</td>
                <td className="py-2 px-4 border-b">{pkg.agentCreated}</td>
                <td className="py-2 px-4 border-b">{pkg.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPackages;
