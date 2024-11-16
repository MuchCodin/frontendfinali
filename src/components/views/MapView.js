// src/components/views/MapView.js
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, Battery } from 'lucide-react';

const MapView = ({ wheelchairs, onSelectChair }) => (
  <div className="p-4 space-y-4">
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Current Location</h3>
            <p className="text-sm text-gray-500">Terminal 1 - Main Entrance</p>
          </div>
          <MapPin className="text-blue-500" />
        </div>
      </CardContent>
    </Card>

    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Available Wheelchairs</h2>
      {wheelchairs.map(chair => (
        <Card 
          key={chair.id}
          className={`cursor-pointer hover:shadow-md transition-shadow ${chair.status === 'in_use' ? 'opacity-50' : ''}`}
          onClick={() => chair.status === 'available' && onSelectChair(chair)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{chair.id}</h3>
                <p className="text-sm text-gray-500">{chair.location}</p>
                <p className="text-xs text-gray-400 mt-1">{chair.distance}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Battery className="text-green-500" size={18} />
                  <span className="text-sm text-gray-600">{chair.battery}%</span>
                </div>
                <span className={`text-xs mt-1 ${chair.status === 'available' ? 'text-green-500' : 'text-red-500'}`}>
                  {chair.status === 'available' ? 'Available' : 'In Use'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MapView;
