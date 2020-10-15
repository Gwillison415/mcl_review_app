import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { Divider } from '@material-ui/core';
import MediaCard from "./MediaCard";
import ProgressBar from "./ProgressBar";
const GET_BOOKS = gql`
  query getAllBooks {
    books {
      author
      id
      image_url
      publisher
      summary
      title
      reviews_aggregate {
        aggregate {
          avg {
            rating
          }
          count
        }
      }
    }
  }
`;

export default function BooksList() {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    variables: { },
  });
  if (loading) return <ProgressBar/>;
  if (data) {
    const {books} = data
    console.log('books', books)
    return (
      <div>
        {books.map((cardProps, idx) => {

          return <MediaCard key={idx} {...cardProps}></MediaCard>;
        })}
      </div>
    );
  }
}