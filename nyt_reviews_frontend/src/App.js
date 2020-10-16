import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import "./App.css";
import { SearchResults } from "./components/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksList from "./components/BooksList";
import Rating from "./components/Rating";
import { NavContext } from "./components/context/NavContext";
function App() {
  const [navContext] = useContext(NavContext);
  const { appPage } = navContext;
  console.log("navContext", navContext);
  return (
    <>
      <Router>
        <Rating voteAverage={null} voteCount={null}></Rating>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/about">
              {" "}
              <About></About>
            </Route>
            <Route path="/reviews">
              <SearchResults></SearchResults>
            </Route>
            <Route path="/search">
              <SearchResults></SearchResults>
            </Route>
            <Route path="/">
              <BooksList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
