import React from 'react';
import Contact from './Contact';

function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        width: '100%',
        height: '100%'
      };

  return (
    <footer style={footerStyle}>
      For more information go to Contact.
    </footer>
  );
}

export default Footer;
