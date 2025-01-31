// EditProfileForm.jsx
import React, { useState } from 'react';

const EditProfileForm = ({ farmer, onSave, onCancel }) => {
  const [editedFarmer, setEditedFarmer] = useState({ ...farmer });

  const handleChange = (e) => {
    setEditedFarmer({ ...editedFarmer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedFarmer);
  };

  return (
    <form onSubmit={handleSubmit} className="text-black space-y-2">
      <input
        type="text"
        name="name"
        value={editedFarmer.name}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 text-xs"
      />
      <input
        type="text"
        name="farmName"
        value={editedFarmer.farmName}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 text-xs"
      />
      <input
        type="text"
        name="location"
        value={editedFarmer.location}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 text-xs"
      />
      <input
        type="text"
        name="phone"
        value={editedFarmer.phone}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 text-xs"
      />
      <input
        type="email"
        name="email"
        value={editedFarmer.email}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 text-xs"
      />
      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 text-white font-bold py-1 px-2 rounded text-xs"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
