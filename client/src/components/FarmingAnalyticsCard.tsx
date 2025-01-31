import React from 'react';
import { Grid } from '@mui/material';
import FarmingAnalyticsCard from './FarmingAnalyticsCard'; // Assuming your component is in the same directory

const FarmersAnalyticsDashboard: React.FC = () => {
  // Sample data for daily activities
  const dailyActivities = [
    { title: 'Plants Planted', value: 150, unit: 'plants' },
    { title: 'Watering Sessions', value: 3, unit: 'times' },
    { title: 'Crops Harvested', value: 50, unit: 'kg' },
    { title: 'Fertilizer Applied', value: 20, unit: 'kg' },
  ];

  return (
    <Grid container spacing={2}>
      {dailyActivities.map((activity, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <FarmingAnalyticsCard title={activity.title} value={activity.value} unit={activity.unit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FarmersAnalyticsDashboard;