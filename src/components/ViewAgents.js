import React, { useState } from "react";

const ViewAgents = () => {
  const [agents, setAgents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321" },
  ]);

  const [editingAgent, setEditingAgent] = useState(null);

  // Function to delete an agent
  const deleteAgent = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this agent?");
    if (confirmed) {
      setAgents(agents.filter((agent) => agent.id !== id));
    }
  };

  // Function to handle editing agent details
  const startEdit = (agent) => {
    setEditingAgent(agent);
  };

  // Function to handle saving the edited agent details
  const handleSave = () => {
    setAgents(
      agents.map((agent) =>
        agent.id === editingAgent.id ? editingAgent : agent
      )
    );
    setEditingAgent(null); // Reset after saving
  };

  // Function to handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAgent({ ...editingAgent, [name]: value });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">View Agents</h1>

      {/* Table for displaying agents */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id} className="text-center">
                <td className="py-2 px-4 border-b">{agent.name}</td>
                <td className="py-2 px-4 border-b">{agent.email}</td>
                <td className="py-2 px-4 border-b">{agent.phone}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => startEdit(agent)}
                    className="bg-yellow-400 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteAgent(agent.id)}
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
      {editingAgent && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Agent</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={editingAgent.name}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={editingAgent.email}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={editingAgent.phone}
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
                onClick={() => setEditingAgent(null)}
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

export default ViewAgents;
