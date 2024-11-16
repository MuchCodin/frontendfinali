// src/components/views/ScanView.js
import React from 'react';
import { QrCode } from 'lucide-react';

const ScanView = ({ onSuccess, onCancel }) => (
  <div className="p-4 space-y-4">
    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
      <QrCode className="w-32 h-32 text-gray-400" />
    </div>
    <p className="text-center text-gray-500">Scan the QR code on the wheelchair to begin</p>
    <button
      onClick={onSuccess}
      className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
    >
      Simulate Successful Scan
    </button>
    <button
      onClick={onCancel}
      className="w-full border border-gray-300 py-3 rounded-lg"
    >
      Cancel
    </button>
  </div>
);

export default ScanView;
