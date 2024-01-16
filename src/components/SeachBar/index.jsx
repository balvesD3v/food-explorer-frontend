import React, { useState } from "react";
import { SearchBar } from "./styles";
import { useSearch } from "../../hooks/search";

function Search({ onInputChange }) {
  const { searchTerm, setSearch } = useSearch();

  const handleInputChange = (e) => {
    const term = e.target.value;
    console.log("Search Term:", term);
    setSearch(term);
    onInputChange(term);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const delayedSearch = debounce((term) => {
    onInputChange(term);
  }, 300); // Ajuste o valor do delay conforme necessário

  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={searchTerm}
        onChange={(e) => {
          handleInputChange(e);
          delayedSearch(e.target.value);
        }}
      />
    </SearchBar>
  );
}

export default Search;
