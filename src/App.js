import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [menuActive, setMenuActive] = useState(false);

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

  const handleMenuToggle = () => {
    setMenuActive(prevState => !prevState);
  };

  return (
    <div className="App">
      <nav style={{ backgroundColor: navbarColor }}>
        <div className="logo">
          <a href="index.html"><img src="fav.png" alt="Logo" className="logo-img" /></a>
          <span>GeneticX</span>
        </div>
        <div className={`nav-links-container ${menuActive ? 'active' : ''}`}>
          <ul className="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#"><button id="signin-btn">Sign in</button></a></li>
            <li><a href="#"><button id="register-btn">Register</button></a></li>
          </ul>
        </div>
        <div className="toggler" id="toggler" onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default App;
