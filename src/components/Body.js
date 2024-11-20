// Body.js
import React, { useEffect, useState } from 'react';
import videoFile from '../media/video.mp4';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Body({ description, features }) {
  // Koordinat untuk peta (Koordinat yang baru)
  const [position, setPosition] = useState(null);

  // Set posisi secara langsung
  useEffect(() => {
    // Koordinat baru untuk lokasi yang dimaksud
    setPosition([-8.226046, 114.371124]); // Koordinat Latitude, Longitude
  }, []);

  // Jangan render peta sebelum posisi sudah siap
  if (!position) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="description">
        <h2>Petualangan Tak Terlupakan Bersama Travel Company</h2>
        <p>{description}</p>
      </section>
      
      <section className="features">
        <h2>Pesona Wisata Banyuwangi</h2>
        <div className="video-container">
          <video
            controls
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }} // Responsif
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      
      <section className="map">
        <h2>Lokasi Wisata Banyuwangi</h2>
        {/* MapContainer hanya akan dirender jika posisi sudah ada */}
        <MapContainer 
          className="map-container"
          center={position} 
          zoom={12} 
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Banyuwangi, Jawa Timur, Indonesia
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </main>
  );
}

export default Body;
