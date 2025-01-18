import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import MySkillsSection from "../components/MySkillsSection";
function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () =>{
    setIsLightMode((prevMode) => !prevMode);
  }
  return(
 <div className={`app-container ${isLightMode? 'light-mode' : 'dark-mode'} `}>
  <div className='container'>
  <Navbar  toggleTheme={toggleTheme}/>
  <MySkillsSection />
  <div className="projSection"></div>
  </div>
  </div>
  )
}

export default App
