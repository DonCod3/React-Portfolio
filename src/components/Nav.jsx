import React from 'react';

// function Nav(props) {
//   const {
//     aboutSelected,
//     setAboutSelected,
//     portfolioSelected,
//     setPortfolioSelected,
//     resumeSelected,
//     setResumeSelected,
//     contactSelected,
//     setContactSelected,
//   } = props;

//   function handleClick(e) {
//     const name = e.target.getAttribute('name');
//     if (name === 'about') {
//       setAboutSelected(true);
//       setPortfolioSelected(false);
//       setResumeSelected(false);
//       setContactSelected(false);
//     } else if (name === 'portfolio') {
//       setAboutSelected(false);
//       setPortfolioSelected(true);
//       setResumeSelected(false);
//       setContactSelected(false);
//     } else if (name === 'resume') {
//       setAboutSelected(false);
//       setPortfolioSelected(false);
//       setResumeSelected(true);
//       setContactSelected(false);
//     } else {
//       setAboutSelected(false);
//       setPortfolioSelected(false);
//       setResumeSelected(false);
//       setContactSelected(true);
//     }
//   }
// }

export default function Nav() {
    const linkStyle = {padding: '5px', color: 'white', textDecoration: 'none', hover: 'gray' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            backgroundColor: 'pewter',
            width: '100%',
            top: '0',
            position: 'fixed',
            borderBottom: 'solid 1px black',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About me</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Resume</a>
          </div>
        </section>
      </nav>
    );
  }