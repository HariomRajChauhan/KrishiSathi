import React from 'react';

function Recent() {
  // Sample recent activities data
  const activities = [
    {
      id: 1,
      title: 'Planted Rice Seeds',
      date: '2025-01-28',
      description: 'Planted 2 acres of rice seeds in the North field.',
    },
    {
      id: 2,
      title: 'Watered the Crops',
      date: '2025-01-27',
      description: 'Watered the newly planted crops in the South field.',
    },
    {
      id: 3,
      title: 'Harvested Tomatoes',
      date: '2025-01-26',
      description: 'Harvested tomatoes from the greenhouse.',
    },
    {
      id: 4,
      title: 'Applied Fertilizer',
      date: '2025-01-25',
      description: 'Applied organic fertilizer to the main farm fields.',
    },
  ];

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 mt-6 space-y-6 border-4 border-green-600">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Recent Activities</h2>
      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="bg-gray-50 shadow-md rounded-xl p-6 border-4 border-green-500 
                       hover:bg-green-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-gray-800 hover:text-green-700 transition-all duration-200">
              {activity.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{activity.date}</p>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recent;
