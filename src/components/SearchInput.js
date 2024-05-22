import './SearchInput.css';
import searchicon from '../static/searchicon.svg';
import React, { useState } from 'react';

function SearchInput({ onChange }) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    onChange(text);
  };

  return (
    <div className="Search-input">
      <input
        type="text"
        placeholder="Search Note"
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        <img src={searchicon} className="Search-Icon" alt="searchicon"></img>
      </button>
    </div>
  );
}

export default SearchInput;
