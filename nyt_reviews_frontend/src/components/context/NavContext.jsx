
import React, { useState, createContext } from "react";
export const NavContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const NavContextProvider = (props) => {
const [appPage, setAppPage] = useState('/')
  return (
    <NavContext.Provider value={[appPage, setAppPage]}>
      {props.children}
    </NavContext.Provider>
  );
};
