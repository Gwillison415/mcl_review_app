import React, { useState, createContext, useReducer } from "react";
export const NavContext = createContext();

const initialState = {
  currentBook: {
    rating: 2.5,
    title: "CAMINO WINDS",
    summary:
      "The line between fact and fiction becomes blurred when an author of thrillers is found dead after a hurricane hits Camino Island.",
    publisher: "Doubleday",
    image_url: "https://s1.nyt.com/du/books/images/9780385545938.jpg",
    author: "by John Grisham",
    count: 45,
    id: "418d1c5e-8a9f-4dc7-b034-23d3ed353e0c",
  },
  user: {
    id: "81650738-c431-4598-a573-5407f9de7d34",
    name: "Grant",
  },
  appPage: "/",
  loading: false,
  error: null,
};

const navReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BOOK":
      return {
        ...state,
        ...action.payload,
      };
    case "REVIEW_BOOK":

      return {
        ...state,
        currentBook: { ...action.payload },
        appPage: action.appPage,
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};
// Create a provider for components to consume and subscribe to changes
export const NavContextProvider = (props) => {
  // const [appPage, setAppPage] = useState('/')
  const [state, dispatch] = useReducer(navReducer, initialState);

  return (
    <NavContext.Provider value={[state, dispatch]}>
      {props.children}
    </NavContext.Provider>
  );
};
