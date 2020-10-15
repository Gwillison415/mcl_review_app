import React from "react";
import Button from "@material-ui/core/Button";
import { gql, useMutation, useQuery, makeVar } from "@apollo/client";
import { ApolloConsumer } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 10,
  },
  content: {
    flex: "1 0 auto",
  },
}));

const SEED_DB = gql`
  mutation insertNewBooks($objects:[books_insert_input!]!) {
    insert_books(objects: $objects) {
      returning {
        id
        title
        author
      }
    }
  }
`;
export const bookItems = makeVar([]);

export default function Seed() {
  const classes = useStyles();
    const [seedData, { data }] = useMutation(SEED_DB);

const readFile = () => {
  fetch("https://raw.githubusercontent.com/moonvd/hw/master/books.txt")
    .then((r) => {
      return r.text();
    })
    .then((text) => {
      const entries = text.split(/\n{2,}/g);
      let formattedEntries = entries.map((entry) => {
        const lines = entry.split(/\n/g);
        const [title, authorPublisher, summary, image_url] = lines;
        const [author, publisher] = authorPublisher.split("|");
        return {
          author,
          publisher,
          title,
          summary,
          image_url,
        };
      });
      seedData({ variables: {objects:formattedEntries} });
      bookItems(formattedEntries);
    });
};
  return (
    <>
      
      <div style={{ width: 10 }}></div>
      <Button
        className={classes.button}
        onClick={(e) => {
          e.preventDefault();
          //   readThatFile();
          readFile();
        }}
        variant="contained"
        color="secondary"
      >
        read file
      </Button>
    </>
  );
}
// We can see how this component could be easily modified to upload a book or any number of books from the client or as an initial database seed from another server => GQL server
// {"summary": "blahhhhhh", "publisher": "blah publisher", "title": "grand yarn the 3rd",
//   "image_url": "https://s1.nyt.com/du/books/images/9780525536291.jpg","author": "grant willison"
// }