import React, { useState } from "react";

const CreateAgent = () => {
  const [agentDetails, setAgentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentDetails({
      ...agentDetails,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setAgentDetails({
      ...agentDetails,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agent ${agentDetails.name} added!`);
    setAgentDetails({
      name: "",
      email: "",
      phone: "",
      address: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
        Create Agent
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Agent Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Agent Name
          </label>
          <input
            type="text"
            name="name"
            value={agentDetails.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={agentDetails.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={agentDetails.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={agentDetails.address}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="3"
            required
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            name="photo"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
          >
            Add Agent
          </button>
        </div>
      </form>

      {/* Preview the uploaded image */}
      {agentDetails.photo && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Photo Preview:</h3>
          <img
            src={URL.createObjectURL(agentDetails.photo)}
            alt="Agent Preview"
            className="w-32 h-32 object-cover rounded-full mx-auto border border-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default CreateAgent;
