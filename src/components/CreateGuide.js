import React, { useState } from "react";

const CreateGuide = () => {
  const [guideDetails, setGuideDetails] = useState({
    name: "",
    experience: "",
    languages: "",
    location: "",
    email: "",
    phone: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuideDetails({
      ...guideDetails,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setGuideDetails({
      ...guideDetails,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Guide ${guideDetails.name} added!`);
    setGuideDetails({
      name: "",
      experience: "",
      languages: "",
      location: "",
      email: "",
      phone: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
        Create Guide
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Guide Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guide Name
            </label>
            <input
              type="text"
              name="name"
              value={guideDetails.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience (in years)
            </label>
            <input
              type="text"
              name="experience"
              value={guideDetails.experience}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Languages Spoken
            </label>
            <input
              type="text"
              name="languages"
              value={guideDetails.languages}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={guideDetails.location}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={guideDetails.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={guideDetails.phone}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Photo Upload */}
          <div className="sm:col-span-2">
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
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
          >
            Add Guide
          </button>
        </div>
      </form>

      {/* Preview the uploaded image */}
      {guideDetails.photo && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Photo Preview:</h3>
          <img
            src={URL.createObjectURL(guideDetails.photo)}
            alt="Guide Preview"
            className="w-32 h-32 object-cover rounded-full mx-auto border border-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default CreateGuide;
