import React from 'react';


const Footer = () => {
  // Data untuk link navigasi dan ikon sosial media
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { platform: 'facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook' },
    { platform: 'twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { platform: 'instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Render navigasi dengan map */}
        <div className="footer-links">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Render ikon sosial media dengan map */}
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              <i className={social.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Moh. Fillah Arridho-1123102154</p>
      </div>
    </footer>
  );
}

export default Footer;
