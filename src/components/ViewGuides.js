import React, { useState } from "react";

const ViewGuides = () => {
  const [guides, setGuides] = useState([
    {
      id: 1,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "123-456-7890",
      experience: "5",
      languages: "English, Spanish",
      location: "New York",
    },
    {
      id: 2,
      name: "Sara Connor",
      email: "sara@example.com",
      phone: "098-765-4321",
      experience: "3",
      languages: "English, French",
      location: "Los Angeles",
    },
  ]);

  const [editingGuide, setEditingGuide] = useState(null);

  // Function to delete a guide
  const deleteGuide = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this guide?");
    if (confirmed) {
      setGuides(guides.filter((guide) => guide.id !== id));
    }
  };

  // Function to start editing a guide
  const startEdit = (guide) => {
    setEditingGuide(guide);
  };

  // Function to handle saving the edited guide details
  const handleSave = () => {
    setGuides(
      guides.map((guide) =>
        guide.id === editingGuide.id ? editingGuide : guide
      )
    );
    setEditingGuide(null); // Reset after saving
  };

  // Function to handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingGuide({ ...editingGuide, [name]: value });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">View Guides</h1>

      {/* Table for displaying guides */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Experience (years)</th>
              <th className="py-2 px-4 border-b">Languages</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <tr key={guide.id} className="text-center">
                <td className="py-2 px-4 border-b">{guide.name}</td>
                <td className="py-2 px-4 border-b">{guide.email}</td>
                <td className="py-2 px-4 border-b">{guide.phone}</td>
                <td className="py-2 px-4 border-b">{guide.experience}</td>
                <td className="py-2 px-4 border-b">{guide.languages}</td>
                <td className="py-2 px-4 border-b">{guide.location}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => startEdit(guide)}
                    className="bg-yellow-400 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteGuide(guide.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editing form */}
      {editingGuide && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Guide</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editingGuide.name}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editingGuide.email}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={editingGuide.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
              <input
                type="text"
                name="experience"
                value={editingGuide.experience}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Languages</label>
              <input
                type="text"
                name="languages"
                value={editingGuide.languages}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={editingGuide.location}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded shadow-md"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditingGuide(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewGuides;
