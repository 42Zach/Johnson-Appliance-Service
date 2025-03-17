import React from 'react';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
