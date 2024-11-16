// src/App.js
import React from 'react';
import WheelPort from './components/WheelPort'; // Adjust the path according to your structure
import './components/styles/global.css'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <WheelPort />
    </div>
  );
};

export default App;
