import React, { useEffect } from 'react';
import L from 'leaflet';

function PetServices() {
  useEffect(() => {
    // Create the map when the component mounts
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="pet-services">
      <h1>Pet Services Directory</h1>
      <div id="map"></div>
    </div>
  );
}

export default PetServices;
