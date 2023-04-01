// eslint-disable-next-line
import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.css';

import { Home, Spaces, About, Blog, Pricing, NoView} from './views';
import { Footer, Nav } from './components';

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/espaces" element={<Spaces />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/prestations" element={<Pricing />} />
          <Route exact path="*" element={<NoView />} />
        </Routes>
        <Footer />
      </main>
      
    </Router>
  );
}

export default App;
