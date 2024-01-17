import React from "react";
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

  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={searchTerm}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </SearchBar>
  );
}

export default Search;
