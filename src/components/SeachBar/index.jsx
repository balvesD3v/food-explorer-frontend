import React, { useState } from "react";
import { SearchBar } from "./styles";

function SeachBar({ onSearch, ...rest }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };
  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchBar>
  );
}

export default SeachBar;
