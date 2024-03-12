"use client"

import { SearchManufaturer } from "."
import { useState } from "react"

const SearchBar = () => {
  function handleSearch () {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufaturer />
      </div>
    </form>
  )
}

export default SearchBar