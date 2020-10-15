import React from 'react'
import MediaCard from "./MediaCard";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    maxWidth: 300,
  }
}))

export  function SearchResults() {
  const classes = useStyles();
const results = [
  {
    rating:2.5,
    title:'CAMINO WINDS',
    summary:'The line between fact and fiction becomes blurred when an author of thrillers is found dead after a hurricane hits Camino Island.',
    publisher:'Doubleday',
    image_url:'https://s1.nyt.com/du/books/images/9780385545938.jpg',
    author:'by John Grisham',
    count: 45,
  },
];



  return (
    <>
      {results.map((cardProps, idx) => {
        return <MediaCard key={idx} {...cardProps}></MediaCard>;
      })}
    </>
  );
}
