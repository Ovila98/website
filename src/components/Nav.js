import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { throttle } from '../utils/throttle';
import logo from "../res/logo-min.png";

function toggleBg(isOnHomePage) {
  let isScrolled = isOnHomePage ?
  (document.body.scrollTop > (window.innerHeight)*0.25 || document.documentElement.scrollTop > (window.innerHeight)*0.25)
  : true;
  const nav = document.querySelector("#main-nav")
  const navlinks = document.querySelectorAll(".nav-link")
  nav.classList.toggle("dw-bg", isScrolled);
  nav.classList.toggle("light-bs", isScrolled);
  navlinks.forEach(link => {
    link.classList.toggle("dw-fg", !isScrolled);
    link.classList.toggle("db-fg", isScrolled);
  });
}

export default function Nav() {
  const location = useLocation();

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navBtns = document.querySelector('#nav-btns');
  
    hamburger.addEventListener('click', function() {
      navBtns.classList.toggle('open');
    });

    navBtns.addEventListener('click', function() {
      navBtns.classList.toggle('open');
    });
  });

  useEffect(() => {
    
    let isOnHomePage = location.pathname === "/";
    toggleBg(isOnHomePage)
    
    if(isOnHomePage){
      toggleBg(isOnHomePage)
      window.onscroll = throttle(function() {
        toggleBg(isOnHomePage);
      }, 50);
    }

    
    
  }, [location])

  return (
    <nav id="main-nav">
      <div class="nav-div" id="nav-home">
        <Link to="/" class="nav-link"><img src={logo} id="nav-logo" alt="logo" /></Link>
      </div>
      <div class="nav-div" id="nav-btns">
        <Link to="espaces" class="nav-link dw-fg">Espaces</Link>
        <Link to="prestations" class="nav-link dw-fg">Prestations</Link>
        <Link to="about" class="nav-link dw-fg">Qui sommes-nous ?</Link>
      </div>
      <button class="hamburger" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  )
}
