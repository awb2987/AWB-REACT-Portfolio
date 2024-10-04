import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import NotFound from './components/NotFound'; // Import your NotFound component
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
