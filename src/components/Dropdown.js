import React from 'react';
import './Dropdown.css';

const Dropdown = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="Dropdown">
      <select className="Dropbtn" onChange={handleChange}>
        <option defaultValue={'all'}>All</option>
        <option value={'complete'}>Complete</option>
        <option value={'incomplete'}>Incomplete</option>
      </select>
    </div>
  );
};

export default Dropdown;
