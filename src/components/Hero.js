// Hero.js
import React from 'react';

// Komponen Hero untuk menampilkan setiap kartu hero
function Hero({ image, description }) {
  return (
    <section className="hero-card">
      <img src={image} alt="Hero" className="hero-image" />
      <p className="hero-description">{description}</p>
    </section>
  );
}

// Komponen HeroList untuk menampilkan daftar kartu hero
function HeroList({ items }) {
  return (
    <div className="hero-container">
      {items.map((item, index) => (
        <Hero key={index} image={item.image} description={item.description} />
      ))}
    </div>
  );
}

export default HeroList;
