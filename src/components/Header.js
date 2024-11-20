// Header.js
import React from 'react';

function Header({ title, logo, navItems }) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>{title}</h1>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}><a href={item.link}>{item.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;