import React from 'react'

const Search = ({ placeholder, searchData }) => {
  return(
    <input 
    type='search'
    placeholder={placeholder}
    onChange={searchData}
  />
  )
}

export default Search