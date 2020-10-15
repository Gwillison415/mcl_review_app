import React from "react";
import { ApolloConsumer, useMutation } from "@apollo/client";
import Button from "@material-ui/core/Button";

const WithApolloClient = () => (
  <ApolloConsumer>
    {(client) => "We have access to the client!" /* do stuff here */}
  </ApolloConsumer>
);

import { gql, useMutation, makeVar } from "@apollo/client";

const SEED_DB = gql`
  mutation insertNewBooks($objects: [books_insert_input!]!) {
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
  const [seedData, { data }] = useMutation(SEED_DB);
  console.log("data", data);
  bookItems(data);
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        seedData({ variables: { type: input.value } });
      }}
      variant="contained"
      color="secondary"
    >
      Seed Data
    </Button>
  );
}

// const SEED_DB = gql`
//   mutation insertNewBooks(
//     $author: String!
//     $id: Int!
//     $image_url: String!
//     $publisher: String!
//     $summary: String!
//     $title: String!
//   ) {
//     insert_books(
//       objects: {
//         author: $author
//         id: $id
//         image_url: $image_url
//         publisher: $publisher
//         summary: $summary
//         title: $title
//       }
//     ) {
//       returning {
//         id
//         title
//         author
//       }
//     }
//   }
// `;
