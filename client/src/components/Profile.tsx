import { useState } from 'react';
import EditProfileForm from './EditProfileForm'; // Separate component for edit form (optional)

function Profile() {
  const [farmer, setFarmer] = useState({
    name: 'Ram Kishan',
    farmName: 'Chauri Farm',
    location: 'Janakpur, Nepal',
    phone: '+977 98XXXXXXXX',
    email: 'ram@example.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKp2HwM3_qmK7pBtet8jnRqi2zV92INj8jQ&s',
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
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-green-800 mb-6">Farmer Profile</h1>

      {/* Farmer Profile Card */}
      <div className="bg-green-50 p-6 shadow-lg rounded-lg w-full md:w-1/2 flex flex-col justify-start items-center space-y-4">
        
        {/* Profile Header Image */}
        <div
          className="w-full h-32 bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTLmT9QjcMJBfOciR4ry74N40BmfsxPLDcFZnfsM2FqKW2uhu2RNQOPF7Onk7MKBEtM0&usqp=CAU')",
          }}
        ></div>

        {/* Profile Picture and Profile Details */}
        <div className="flex flex-col items-center mt-[-20px]">
          {/* Profile Picture */}
          <img
            src={farmer.profilePicture}
            alt={`${farmer.name}'s profile picture`}
            className="w-20 h-20 rounded-full border-4 border-green-500 shadow-md mb-4"
          />

          {/* Profile Details */}
          <div className="text-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900">{farmer.name}</h2>
            <p className="text-sm text-gray-700">{farmer.farmName}</p>
            <p className="text-xs text-gray-600">{farmer.location}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-3 w-full">
          <h3 className="text-md font-semibold text-gray-900">Contact Info</h3>
          {isEditing ? (
            <EditProfileForm
              farmer={farmer}
              onSave={handleSaveProfile}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <p className="text-xs text-gray-700">📞 Phone: {farmer.phone}</p>
              <p className="text-xs text-gray-700">📧 Email: {farmer.email}</p>
              <button
                onClick={handleEditProfile}
                className="text-blue-600 text-xs mt-1 hover:underline"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        {/* Activity Summary */}
        <div className="mt-4 w-full">
          <h3 className="text-md font-semibold text-gray-900 text-center">Activity Summary</h3>
          <div className="bg-gray-50 border border-green-400 p-3 rounded-lg mt-2 min-h-[50px] flex items-center justify-between">
            <span className="font-medium text-xs text-gray-800">
              ✅ Completed: {dailyActivitySummary.completedActivities}
            </span>
            <span className="font-medium text-xs text-gray-800">
              ⏳ Pending: {dailyActivitySummary.pendingActivities}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
