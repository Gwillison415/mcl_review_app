import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Chip,
  Divider,
} from "@material-ui/core";
import { gql, useMutation, useQuery, makeVar } from "@apollo/client";
import { NavContext } from "./context/NavContext";

import Rating from "./Rating";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "-webkit-fill-available",
  },
  content: {
    flex: "1 0 auto",
  },
  button: {
    padding: 10,
    marginRight: theme.spacing(1),
  },
  cover: {
    width: 151,
  },
  rating: {
    display: "flex",
    justifyContent: "left",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  controls: {
    display: "flex",
    justifyContent: "right",
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imagePlaceholder: {
    display: "flex",
    minHeight: 225,
    minWidth: 150,
    backgroundColor: "lightgrey",
  },
  container: {
    padding: 16,
    backgroundColor: "white",
  },
}));

const ADD_REVIEW_BY_USER = gql`
  mutation addReviewByUser($objects: [reviews_insert_input!]!) {
    insert_reviews(objects: $objects) {
      affected_rows
    }
  }
`;

export default function MediaCard({
  rating,
  title,
  summary,
  publisher,
  image_url,
  author,
  count,
  id,
  userRating,
  dispatch,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [formValues, setFormValues] = useState({
    reviewText: "",
    reviewTitle: "",
    rating: userRating,
  });
  const [navContext] = useContext(NavContext);
  const { user } = navContext;
  const [addReview, { data }] = useMutation(ADD_REVIEW_BY_USER);

  function handleAccordion(event) {
    const {
      target: { type },
    } = event;
    if (
      type === "fieldset" ||
      type === "button" ||
      type === "input" ||
      type === "radio" ||
      type === "span"
    ) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }
  const callToAction = count ? "Review this book" : "Be the first to review!";

  const reviewBook = (newProps) => {
    const payload = {
      rating,
      title,
      summary,
      publisher,
      image_url,
      author,
      count,
      id,
      ...newProps,
    };
    dispatch({
      type: "REVIEW_BOOK",
      payload,
      appPage: "/reviews",
    });
  };

  return (
    <div className={classes.container}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded}
        onChange={handleAccordion}
      >
        <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
          <div className={classes.imagePlaceholder}>
            {image_url && (
              <CardMedia
                className={classes.cover}
                image={image_url}
                title={title}
              />
            )}
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.root} component="h5" variant="h5">
                {title}
              </Typography>
              <Typography
                className={classes.root}
                variant="caption"
                color="textSecondary"
              >
                {publisher}
              </Typography>
              <Typography
                className={classes.root}
                variant="subtitle2"
                color="textSecondary"
              >
                {summary}{" "}
              </Typography>
            </CardContent>
            <div className={classes.rating}>
              <Rating
                onStartReview={reviewBook}
                id={id}
                voteCount={count}
                voteAverage={rating}
              ></Rating>
              {dispatch && (
                <Button
                  className={classes.button}
                  onClick={(e) => {
                    setExpanded(true);

                    reviewBook({});
                    e.preventDefault();
                  }}
                  variant="contained"
                  color="secondary"
                >
                  {callToAction}
                </Button>
              )}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Form
            formValues={formValues}
            setFormValues={setFormValues}
            count={count}
            id={id + "form"}
          ></Form>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button
            onClick={(e) => {
              setExpanded(false);
            }}
            size="small"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              addReview({
                variables: {
                  objects: [
                    { ...formValues, user: { data: { id, name: user.name } } },
                  ],
                },
              });
            }}
            size="small"
            color="primary"
          >
            Save Review
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
