import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [mapData, setMapData] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.AIzaSyBTEOgoqNJTmGf3GoZvmoqsn-aGeXGJJ4w,
    libraries: ['places'],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/map', {
          params: { address: 'New York' },
        });

        setMapData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={12}
        center={mapData ? { lat: mapData.lat, lng: mapData.lng } : null}
      >
        {mapData && <Marker position={{ lat: mapData.lat, lng: mapData.lng }} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
