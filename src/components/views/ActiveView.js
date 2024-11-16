// src/components/views/ActiveView.js
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Battery, Clock, AlertCircle } from 'lucide-react';

const ActiveView = ({ selectedChair, timer, onEndTrip }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Active Booking</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{selectedChair.id}</h3>
                <p className="text-sm text-gray-500">{selectedChair.location}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  <Clock className="text-blue-500" size={18} />
                  <span className="text-sm text-gray-600">{formatTime(timer)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Battery className="text-green-500" size={18} />
                  <span className="text-sm text-gray-600">{selectedChair.battery}%</span>
                </div>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Need Help?</AlertTitle>
              <AlertDescription>
                Call support at 1-800-HELP for immediate assistance.
              </AlertDescription>
            </Alert>

            <button
              onClick={onEndTrip}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
            >
              End Trip
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveView;
