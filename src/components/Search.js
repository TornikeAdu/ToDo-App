import React from 'react';
import './Search.css';
import Darkmode from './Darkmode';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';

const Search = ({ onFilterChange, onSearchChange }) => {
  return (
    <div className="Search">
      <SearchInput onChange={onSearchChange} />
      <Dropdown onChange={onFilterChange} />
      <Darkmode />
    </div>
  );
};

export default Search;
