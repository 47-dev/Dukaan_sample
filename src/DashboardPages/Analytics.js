import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function Analytics() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    setVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="flex h-screen bg-richblack-900 text-white">
      <Dashboard />
    </div>
  );
}

export default Analytics;
