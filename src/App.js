import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarColor, setNavbarColor] = useState('transparent');

  const handleMenuToggle = () => {
    setMenuActive(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavbarColor("#002648");
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav style={{ backgroundColor: navbarColor }}>
          <div className="logo">
            <a href="index.html"><img src="assets/fav.png" alt="Logo" className="logo-img" /></a>
            <span>GeneticX</span>
          </div>
          <div className={`nav-links-container ${menuActive ? 'active' : ''}`}>
            <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="#services-container">Services</a></li>
              <li><a href="#meetOurTeam">Team</a></li>
              <li><a href="#questions-container">FAQs</a></li>
              <li><a href="Login.html"><button id="register-btn">Register</button></a></li>
            </ul>
          </div>
          <div className="toggler" id="toggler" onClick={handleMenuToggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>

      <section className="main">
        <video autoPlay loop muted id="background-video">
          <source src="/assets/video6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main-content">
          <h1>Decode Your DNA</h1>
          <a href="form.html"><button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Get Started</span>
            </span>
          </button></a>
        </div>
      </section>

      <section className="website-container">
      <h2>Upload Your <p>DNA</p> like a Pro !</h2>
      <div className="website-info">
        <div className="sub-section">
          <img src="images/tick mark.png" alt="" />
          <p>Genetic Analysis</p>
          <div className="sub-section-content">
            <p>Upload your DNA in depth analysis.</p>
          </div>
        </div>

        <div className="sub-section">
          <img src="images/tick mark.png" alt="" />
          <p>Predict Impacts</p>
          <div className="sub-section-content">
            <p>Understood what those mutations mean for you.</p>
          </div>
        </div>

        <div className="sub-section">
          <img src="images/tick mark.png" alt="" />
          <p>Learn Genetics</p>
          <div className="sub-section-content">
            <p>Dive into the wild <br /> world of DNA science.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default App;