import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {
        aboutSelected ? (<About />)
        : portfolioSelected ? (<Portfolio />)
        : resumeSelected ? (<Resume />)
        : contactSelected ? (<ContactForm />)
        : (<About />)
      }
      <Footer></Footer>
    </div>
  );
}

export default App;


