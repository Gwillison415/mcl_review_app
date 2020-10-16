import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Divider } from '@material-ui/core';
import MediaCard from "./MediaCard";
import ProgressBar from "./ProgressBar";
import { NavContext } from "./context/NavContext";

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
  const [state, dispatch] = useContext(NavContext);

  if (loading) return <ProgressBar/>;
  if (data) {
    const {books} = data
    console.log('books', books)
    return (
      <div>
        {books.map((cardProps, idx) => {
          const { reviews_aggregate , ...topLevelCardProps} = cardProps
          const {
            count,
            aggregate: {
              avg: { rating },
            },
          } = reviews_aggregate;
          const flattenedCardProps = { ...topLevelCardProps, count,rating };
          return (
            <MediaCard
              key={idx}
              dispatch={dispatch}
              {...flattenedCardProps}
            ></MediaCard>
          );
        })}
      </div>
    );
  }
}