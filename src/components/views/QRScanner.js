// import React, { useState } from 'react';
// import QrScanner from 'react-qr-scanner';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../firebaseConfig';

// const QRScanner = ({ onScan }) => {
//   const [error, setError] = useState(null);

//   const handleScan = async (data) => {
//     if (data) {
//       try {
//         const scannedData = JSON.parse(data.text);
        
//         // Verify the QR code against Firebase
//         const wheelchairDoc = doc(db, 'wheelchairs', scannedData.wheelchairId);
//         const wheelchairData = await getDoc(wheelchairDoc);
        
//         if (wheelchairData.exists()) {
//           const wheelchair = wheelchairData.data();
          
//           if (wheelchair.currentBookingId === scannedData.bookingId) {
//             onScan(scannedData);
//           } else {
//             setError('Invalid or expired QR code');
//           }
//         } else {
//           setError('Wheelchair not found');
//         }
//       } catch (err) {
//         setError('Invalid QR code format');
//         console.error('QR Scan Error:', err);
//       }
//     }
//   };

//   const handleError = (err) => {
//     setError('Error scanning QR code');
//     console.error("QR Scan Error:", err);
//   };

//   return (
//     <div className="p-4 text-center">
//       <h2 className="text-lg font-semibold mb-4">Scan the QR Code to Start Your Trip</h2>
//       <div className="flex justify-center">
//         <QrScanner
//           delay={300}
//           style={{ height: 240, width: 320 }}
//           onError={handleError}
//           onScan={handleScan}
//         />
//       </div>
//       {error && (
//         <div className="mt-4 text-red-500">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRScanner;

import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { Card, CardContent } from '../ui/card';

const QRScanner = ({ onScan }) => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.error(err);
    setError('Error accessing camera. Please make sure you have granted camera permissions.');
  };

  const handleScan = (data) => {
    if (data) {
      onScan(data.text);
    }
  };

  return (
    <div className="p-4">
      <Card>
        <CardContent className="p-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              constraints={{
                video: {
                  facingMode: { exact: "environment" }
                }
              }}
              style={{ width: '100%' }}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <p className="text-center text-gray-500 text-sm mt-4">
            Position the QR code within the frame to scan
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRScanner;