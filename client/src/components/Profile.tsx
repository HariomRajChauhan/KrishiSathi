import { useState } from 'react';

function Profile() {
  const [farmer, setFarmer] = useState({
    name: 'John Doe',
    farmName: 'Sunny Acres Farm',
    location: 'Chitwan, Nepal',
    phone: '+977 9812345678',
    email: 'john@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  const [isEditing, setIsEditing] = useState(false);

  const dailyActivitySummary = {
    completedActivities: 5,
    pendingActivities: 2,
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (updatedFarmer) => {
    setFarmer(updatedFarmer);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-sm mx-auto p-3 bg-white bg-opacity-90 shadow-md rounded-lg bg-green-200 hover:bg-green-300 transition duration-300">
      <div className="flex items-center justify-center mb-4">
        <img
          src={farmer.profilePicture}
          alt={`${farmer.name}'s profile picture`}
          className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-3 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{farmer.name}</h2>
        <p className="text-sm text-gray-600">{farmer.farmName}</p>
        <p className="text-xs text-gray-500">{farmer.location}</p>
      </div>

      <div className="mb-3">
        <h3 className="text-md font-semibold text-gray-800">Contact Info</h3>
        {isEditing ? (
          <EditProfileForm
            farmer={farmer}
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <p className="text-xs text-gray-600">Phone: {farmer.phone}</p>
            <p className="text-xs text-gray-600">Email: {farmer.email}</p>
            <button
              onClick={handleEditProfile}
              className="text-blue-500 text-xs mt-1 hover:underline"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-md font-semibold text-gray-800">Activity Summary</h3>
        <div className="flex justify-between text-xs text-gray-600">
          <span className="font-medium">
            Completed: {dailyActivitySummary.completedActivities}
          </span>
          <span className="font-medium">
            Pending: {dailyActivitySummary.pendingActivities}
          </span>
        </div>
      </div>
    </div>
  );
}

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editedFarmer.name}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 mb-2 text-xs"
      />
      <input
        type="text"
        name="farmName"
        value={editedFarmer.farmName}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 mb-2 text-xs"
      />
      <input
        type="text"
        name="location"
        value={editedFarmer.location}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 mb-2 text-xs"
      />
      <input
        type="text"
        name="phone"
        value={editedFarmer.phone}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 mb-2 text-xs"
      />
      <input
        type="email"
        name="email"
        value={editedFarmer.email}
        onChange={handleChange}
        className="border rounded w-full py-1 px-2 mb-2 text-xs"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs mr-2"
      >
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded text-xs"
      >
        Cancel
      </button>
    </form>
  );
};

export default Profile;