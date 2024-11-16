import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function WheelchairMap({ wheelchair }) {
  const airportPosition = [35.2140, -80.9431]; // Center map on Charlotte Douglas International Airport

  return (
    <MapContainer center={airportPosition} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {wheelchair && (
        <Marker position={airportPosition}>
          <Popup>
            <strong>{wheelchair.name}</strong><br />
            Status: {wheelchair.status}<br />
            Battery: {wheelchair.battery}%
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default WheelchairMap;
