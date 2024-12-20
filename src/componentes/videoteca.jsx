import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function Buscador() {
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      map.setView(e.latlng, 13);
    });
  }, [map]);

  return null;
}

function App() {
  return (
    <div>
      <h1>Videoteca</h1>
      <MapContainer style={{ height: '400px', width: '50%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Videoteca />
      </MapContainer>
    </div>
  );
}

export default App;