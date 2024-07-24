import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder='Looking for something specific?' id="SearchBar"></input>
      <SearchIcon id="SearchIcon" />
    </div>
  )
}

export default SearchBar
