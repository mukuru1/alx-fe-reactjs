import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link>
    </nav>
  );
}
export default Navbar;
