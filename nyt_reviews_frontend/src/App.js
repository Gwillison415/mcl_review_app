import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import "./App.css";
import { SearchResults } from "./components/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksList from "./components/BooksList";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/about">
              {" "}
              <About></About>
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
