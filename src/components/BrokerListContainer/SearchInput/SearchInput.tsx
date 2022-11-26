import React, { FC, useState } from "react";
import styles from "./SearchInput.module.scss";

type SearchInputProps = {
  handleInputChange: (text: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({ handleInputChange }) => {
  const [searchInputText, setSearchInputText] = useState("");

  const handleSearchInput = (text: string) => {
    handleInputChange(text);
    setSearchInputText(text);
  };

  return (
    <div className={styles.searchInputContainer}>
      <label htmlFor="broker-search-input">Filter by name</label>
      <div className={styles.searchInputWrapper}>
        <input
          value={searchInputText}
          className={styles.searchInput}
          onChange={(e) => handleSearchInput(e.target.value)}
          id="broker-search-input"
          placeholder="type broker name"
        />
        <div onClick={() => handleSearchInput("")}>X</div>
      </div>
    </div>
  );
};

export default SearchInput;
