import React, { useState } from 'react';
import './Header.css';
import './Nav.css';
import bgvid from './assets/Freedom.mp4'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {


  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Determine the class based on the state of isMenuOpen
  const containerClass = isMenuOpen ? 'container change' : 'container closeChange';
  const bgvidDisplay = isMenuOpen ? false : true;
  const menuOffLogo = isMenuOpen ? '' : 'menuOffLogo';

  return (
    <div>

      <div className="bgcontaier">
        {/* {bgvidDisplay && <video src={bgvid} autoPlay muted loop></video>} 


{/* {bgvidDisplay &&<div class="backgroundOverlay"></div>} */}

        <header>

          <div className={containerClass} onClick={handleButtonClick}>

            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <span className={`logo ${menuOffLogo} `}>

            Astralis Institute</span>

          <div className='shopping-bag-menu-icon-div'>
            <svg className='shopping-bag-menu-icon' fill="#000000" height="20px" width="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.308 492.308" xml:space="preserve">
              <g>
                <g>
                  <path d="M447.082,125.24H345.361V99.212C345.361,44.51,300.856,0,246.154,0s-99.207,44.51-99.207,99.212v26.029H45.226
            L11.75,492.308h468.808L447.082,125.24z M166.639,99.212c0-43.846,35.668-79.519,79.514-79.519
            c43.846,0,79.514,35.673,79.514,79.519v26.029H166.639V99.212z M335.514,212.452c13.269,0,20.563,5.894,20.563,7.846
            c0,1.952-7.293,7.856-20.563,7.856s-20.563-5.904-20.563-7.856C314.952,218.346,322.245,212.452,335.514,212.452z
            M156.793,212.452c13.269,0,20.563,5.894,20.563,7.846c0,1.952-7.293,7.856-20.563,7.856s-20.563-5.904-20.563-7.856
            C136.231,218.346,143.524,212.452,156.793,212.452z M63.207,144.933h83.74v48.677c-17.845,2.865-30.409,13.341-30.409,26.689
            c0,15.702,17.308,27.548,40.255,27.548c22.947,0,40.255-11.846,40.255-27.548c0-13.347-12.564-23.823-30.409-26.689v-48.677
            h159.029v48.677c-17.845,2.865-30.409,13.341-30.409,26.689c0,15.702,17.308,27.548,40.255,27.548
            c22.947,0,40.255-11.846,40.255-27.548c0-13.347-12.564-23.823-30.409-26.689v-48.677h83.74l29.889,327.683H33.317
            L63.207,144.933z"/>
                </g>
              </g>
            </svg>
          </div>

        </header>

      </div>



      {isMenuOpen && (
        <nav className='Nav'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">START HERE</a></li>
            <li><a href="/contact">COURSES</a></li>
            <li><a href="/contact">BLOG</a></li>
            <li><a href="/contact">SHOP</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      )}


    </div>



  );
}

export default Header;