import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import debounce from "lodash/debounce";

export const SearchBar = ({
  classes,
  addSearchResults,
}) => {
  const debounceHandleSearch = React.useCallback(
    debounce(handleSearch, 500),
    []
  );

  function handleSearch(value) {
    if (value.length) {
      addSearchResults({ string: value, });
      
    }
  }
  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      id="searchBar"
      inputProps={{ "aria-label": "search" }}
      onChange={(e) => debounceHandleSearch(e.target.value)}
    />
  );
};


