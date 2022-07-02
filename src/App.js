import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import SphereCanvas from "./components/SphereCanvas";
import data from "./sphereData";
import Sidebar from "./components/Sidebar";
import styles from './components/Sidebar.module.css'
import AnimatedLetters from "./components/AnimatedLetters/AnimatedLetters";

function App() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hClass,sethClass] = useState('h-span')

  const nameArray = ['A','C','K','E','R',' ','Q','U','E','S','T',' ','3','.','0']
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      sethClass('h-span-hover')
    }, 5000)
  }, [])

  return (
    <>
      <div className="App">
        {/* <Sidebar /> */}
        <div className="area">
          <ul className="spheres">
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
            <li><SphereCanvas /></li>
          </ul>
        </div>
        <h1>
          <span className={hClass}>H</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>
    </>
  );
}

export default App;
