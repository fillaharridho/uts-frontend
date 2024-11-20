import React from 'react';
import Header from './components/Header';
import HeroList from './components/Hero';  
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import logo from './media/logo.png';



import baluranImage from './media/baluran.jpeg';
import boomImage from './media/boom.jpeg';
import kawahIjenImage from './media/kawah ijen.jpeg';
import pulauMerahImage from './media/pulau merah.jpeg';
import telukIjoImage from './media/teluk ijo.jpeg';

function App() {
  const description = "Apakah Anda siap menjelajahi keindahan alam, budaya yang kaya, dan pengalaman tak terlupakan di destinasi impian Anda? Di [Nama Travel], kami tidak hanya menawarkan perjalanan, tetapi pengalaman hidup yang akan memperkaya jiwa dan pikiran Anda. Dengan layanan yang profesional, armada transportasi yang nyaman, dan pemandu wisata berlisensi yang berpengalaman, kami memastikan setiap perjalanan Anda berlangsung dengan aman, menyenangkan, dan penuh kenangan indah. Mulai dari destinasi lokal yang eksotis hingga tur internasional yang luar biasa, kami memiliki paket perjalanan yang sesuai dengan kebutuhan Anda.";

  const navItems = [
    { label: "", link: "#" },
  ];

  
  
  const socialLinks = [
    { platform: 'Facebook', url: 'https://www.facebook.com/pantaipandawa' },
    { platform: 'Instagram', url: 'https://www.instagram.com/pantaipandawa' },
  ];

  const heroData = [
    { image: baluranImage, description: 'Taman Nasional Alas Baluran' },
    { image: boomImage, description: 'Pantai BOOM' },
    { image: kawahIjenImage, description: 'Kawah Ijen' },
    { image: pulauMerahImage, description: 'Pantai Pulau Merah' },
    { image: telukIjoImage, description: 'Wisata Pantai Teluk Ijo' },
  ];

  return (
    <div className="App">
      <Header title="TRAVEL COMPANY" logo={logo} navItems={navItems} />
      <HeroList items={heroData} />
      <Body 
        description={description} 
      />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;