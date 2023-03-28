import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../res/logo-min.png";


export default function Nav() {
  return (
    <nav id="main-nav">
      <div class="nav-div" id="nav-home">
        <Link to="/" class="nav-link"><img src={logo} id="nav-logo" alt="logo" /></Link>
      </div>
      <div class="nav-div" id="nav-btns">
        <Link to="espaces" class="nav-link">Espaces</Link>
        <Link to="prestations" class="nav-link">Prestations</Link>
        <Link to="about" class="nav-link">Qui sommes-nous ?</Link>
        {undefined && <Link to="blog" class="nav-link">Blog</Link>}
    </div>
    </nav>
  )
}
