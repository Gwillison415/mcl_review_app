import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import MediaCard from "./MediaCard";
import ProgressBar from "./ProgressBar";
import { NavContext } from "./context/NavContext";

const GET_BOOKS = gql`
  query getBooksAvgRating {
    books {
      author
      id
      image_url
      publisher
      reviews {
        reviewTitle
      }
      reviews_aggregate {
        aggregate {
          count(distinct: false)
          avg {
            rating
          }
        }
      }
      summary
      title
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
    return (
      <div>
        {books.map((cardProps, idx) => {
          const { reviews_aggregate , ...topLevelCardProps} = cardProps
          const {
            aggregate: {
              count,
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