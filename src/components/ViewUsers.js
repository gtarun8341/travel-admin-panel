import React, { useState } from "react";

const ViewUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Tom Wilson",
      email: "tom.wilson@example.com",
      phone: "123-456-7890",
      location: "New York",
      selectedPackages: ["Adventure Tour"],
      previousPackages: ["Cultural Exploration"],
      currentPackages: ["Mountain Trekking"],
      assignedGuide: "Mike Johnson",
      purchaseHistory: [
        { package: "Cultural Exploration", date: "2023-01-15", status: "Completed" },
        { package: "Adventure Tour", date: "2023-03-10", status: "Pending" },
      ],
      paymentStatus: "Paid",
      travelStatus: "In Progress",
      uploadedImages: ["image1.jpg", "image2.jpg"],
      uploadedVideos: ["video1.mp4"],
    },
    {
      id: 2,
      name: "Emma Watson",
      email: "emma.watson@example.com",
      phone: "098-765-4321",
      location: "Los Angeles",
      selectedPackages: ["Cultural Exploration", "City Tour"],
      previousPackages: ["Adventure Tour"],
      currentPackages: ["Beach Vacation"],
      assignedGuide: "Sara Connor",
      purchaseHistory: [
        { package: "Adventure Tour", date: "2022-12-01", status: "Completed" },
      ],
      paymentStatus: "Paid",
      travelStatus: "Completed",
      uploadedImages: ["image3.jpg"],
      uploadedVideos: ["video2.mp4"],
    },
  ];

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">View Users</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name, email, or phone"
        className="w-full mb-6 p-2 border border-gray-300 rounded"
      />

      {/* User Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Phone: {user.phone}</p>
            
            {/* Show full details on click */}
            <button
              onClick={() => {
                const userDetail = document.getElementById(`details-${user.id}`);
                userDetail.classList.toggle("hidden");
              }}
              className="mt-2 text-blue-500 hover:underline"
            >
              Show Details
            </button>

            {/* Details Section */}
            <div id={`details-${user.id}`} className="mt-4 hidden">
              <p className="text-gray-700"><strong>Location:</strong> {user.location}</p>
              <div className="mt-2">
                <h3 className="font-medium">Selected Packages:</h3>
                <p>{user.selectedPackages.join(", ")}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">Previous Packages:</h3>
                <p>{user.previousPackages.join(", ")}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">Current Packages:</h3>
                <p>{user.currentPackages.join(", ")}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">Assigned Guide:</h3>
                <p>{user.assignedGuide}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">Purchase History:</h3>
                <div>
                  {user.purchaseHistory.map((purchase, index) => (
                    <div key={index}>
                      {purchase.package} - {purchase.date} ({purchase.status})
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2"><strong>Payment Status:</strong> {user.paymentStatus}</p>
              <p className="mt-2"><strong>Travel Status:</strong> {user.travelStatus}</p>
              <div className="mt-2">
                <h3 className="font-medium">Uploaded Images:</h3>
                <p>{user.uploadedImages.join(", ")}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">Uploaded Videos:</h3>
                <p>{user.uploadedVideos.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;
