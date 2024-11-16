// src/components/views/BookingView.js
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Battery, AlertCircle } from 'lucide-react';

const BookingView = ({ selectedChair, onConfirm, onCancel }) => (
  <div className="p-4 space-y-4">
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Confirm Booking</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{selectedChair.id}</h3>
              <p className="text-sm text-gray-500">{selectedChair.location}</p>
            </div>
            <div className="flex items-center gap-1">
              <Battery className="text-green-500" size={18} />
              <span className="text-sm text-gray-600">{selectedChair.battery}%</span>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Please ensure you've read the usage instructions on the wheelchair before proceeding.
            </AlertDescription>
          </Alert>

          <button
            onClick={onConfirm}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Confirm Booking
          </button>
          <button
            onClick={onCancel}
            className="w-full border border-gray-300 py-3 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default BookingView;
