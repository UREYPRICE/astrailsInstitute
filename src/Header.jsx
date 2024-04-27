import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Determine the class based on the state of isMenuOpen
  const containerClass = isMenuOpen ? 'container change' : 'container';

  return (
    <header>
<div className={containerClass} onClick={handleButtonClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
    <span className='logo'>Astralis Institute</span>
    </header>
    
  );
}

export default Header;