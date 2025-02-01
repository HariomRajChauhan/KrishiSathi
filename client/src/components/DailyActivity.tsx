import React, { useState } from 'react';

function DailyActivity() {
  const [activities, setActivities] = useState([
    { id: 1, activity: '🌱 Planting Seeds', status: 'Pending' },
    { id: 2, activity: '💧 Watering Crops', status: 'Pending' },
    { id: 3, activity: '🍅 Harvesting Tomatoes', status: 'Pending' },
    { id: 4, activity: '🌿 Checking Soil Moisture', status: 'Pending' },
    { id: 5, activity: '🧹 Cleaning Equipment', status: 'Pending' },
    { id: 6, activity: '🌾 Preparing Soil for Next Planting', status: 'Pending' },
    { id: 7, activity: '🛠️ Others', status: 'Pending' }, // New activity added
  ]);

  // Function to handle the completion of an activity
  const handleActivityCompletion = (id) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, status: 'Completed' } : activity
      )
    );
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-200 to-blue-200 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
        <h2 className="text-2xl font-semibold">🌿 Daily Activities</h2>
      </div>

      {/* Activity List */}
      <ul className="mt-4 space-y-4">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-all duration-300 ${
              activity.status === 'Completed' ? 'bg-green-300' : 'bg-white'
            }`}
          >
            <span
              className={`text-lg font-medium ${
                activity.status === 'Completed' ? 'text-green-900' : 'text-gray-800'
              }`}
            >
              {activity.activity}
            </span>

            {/* Button to mark activity as completed */}
            {activity.status === 'Pending' && (
              <button
                onClick={() => handleActivityCompletion(activity.id)}
                className="bg-blue-500 text- px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                ✅ Mark Completed
              </button>
            )}

            {/* Completed Status */}
            {activity.status === 'Completed' && (
              <span className="text-green-900 font-semibold">✔ Completed</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyActivity;
