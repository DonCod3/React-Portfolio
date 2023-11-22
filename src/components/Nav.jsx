// import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const linkStyle = {padding: '5px', color: 'white', textDecoration: 'none', hover: 'gray' };
  
    return (
      <nav className="main-header-menu" style={linkStyle}>
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            alignItems: 'flex-stcoart',
            justifyContent: 'space-around',
            width: '100%',
            top: '0',
            position: 'fixed',
            borderBottom: 'solid 1px black',
          }}
        >
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>

        </section>
      </nav>
    );
  }