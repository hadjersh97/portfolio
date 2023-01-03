import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';

const Layout = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  )
}

export default Layout



