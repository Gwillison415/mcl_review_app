import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import "./App.css";
import { SearchResults } from "./components/SearchResults";
import BooksList from "./components/BooksList";
import Rating from "./components/Rating";
import { NavContext } from "./components/context/NavContext";
function App() {
  const [navContext] = useContext(NavContext);
  const { appPage } = navContext;
  console.log("navContext", navContext);
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <BooksList />
      </div>
    </>
  );
}

export default App;
