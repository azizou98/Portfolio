import React from 'react';
import './App.css';
import Header from './components/Header';
// import AboutMe from './components/AboutMe';  // Import other components similarly
//import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
