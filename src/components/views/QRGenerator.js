import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const generateQRData = (wheelchairId, bookingId) => {
  return JSON.stringify({
    wheelchairId,
    bookingId,
    timestamp: Date.now()
  });
};

const QRGenerator = ({ wheelchairId, bookingId }) => {
  const qrData = generateQRData(wheelchairId, bookingId);
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <QRCodeCanvas 
        value={qrData}
        size={256}
        level="H"
        includeMargin={true}
      />
      <p className="mt-2 text-sm text-gray-500">Scan this code on the wheelchair</p>
    </div>
  );
};

export default QRGenerator;