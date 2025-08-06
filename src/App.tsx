import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RedirectToDiscord from './pages/Discord';
import RedirectToResume from './pages/Resume';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main route */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header />
                <main>
                  <Hero />
                  <About />
                  <Timeline />
                  <Projects />
                  <Blog />
                  <Contact />
                </main>
                <Footer />
              </div>
            }
          />

          {/* Redirect routes */}
          <Route path="/discord" element={<RedirectToDiscord />} />
          <Route path="/resume" element={<RedirectToResume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
