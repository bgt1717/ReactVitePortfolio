import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from "./components/Toolbar.jsx";
// import Contact from './pages/Contact';
import About from './pages/About.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects.jsx';
import Footbar from './components/Footbar.jsx';
import { Contact } from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Toolbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footbar />
    </div>
    </Router>
  );
}