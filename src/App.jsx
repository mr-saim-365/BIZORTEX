
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
