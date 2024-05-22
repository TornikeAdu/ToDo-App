import React, { useState } from 'react';
import darkicon from '../static/darkicon.svg';
import './Darkmode.css';

function Darkmode() {
  const dark = () => {
    document.querySelector('body').setAttribute('theme', 'dark');
  };
  const light = () => {
    document.querySelector('body').setAttribute('theme', 'light');
  };

  let [isDark, setIsDark] = useState(false);
  isDark ? dark() : light();

  return (
    <div className="Darkmode">
      <button
        onClick={() => {
          setIsDark(!isDark);
          console.log(isDark);
        }}
      >
        <img src={darkicon} alt="darktheme"></img>
      </button>
    </div>
  );
}

export default Darkmode;
