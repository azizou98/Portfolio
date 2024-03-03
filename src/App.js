import React from 'react';
import './App.css';
import Header from './components /Header';
// import AboutMe from './components/AboutMe';  // Import other components similarly
//import Projects from './components/Projects';
import Skills from './components /Skills';
import Contact from './components /Contact';
import image from './components /me_pic.png'

function App() {
  return (
    <div className="App">
      <Header imagePath={image} text={"AIT MOUUSSA"}/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
