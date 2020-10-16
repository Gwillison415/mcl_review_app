import React, { useEffect, useState } from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import clsx from "clsx";

import Rating from "./Rating";

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

export default function MediaCard({
  rating,
  title,
  summary,
  publisher,
  image_url,
  author,
  count,
  id,
  dispatch,
}) {
  rating =3.5
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  function handleAccordion(event) {
    console.log('event.target', event.target)
    const {
      target: { type },
    } = event;
    console.log("type", type);
    if (type === "fieldset" || type === "button") {
      setExpanded(true);
    }
  }
    const callToAction = count
      ? "Review this book"
      : "Be the first to review!";

  const reviewBook = (payload) => {
    dispatch({
      type: "REVIEW_BOOK",
      payload,
      appPage: "/reviews",
    });
  };
  // const image = backdrop_path? backdrop_path: poster_path
  return (
    <div className={classes.container}>
      <Accordion expanded={expanded} onChange={handleAccordion}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          {/* <Card className={classes.root}> */}
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
              <Rating voteCount={count} voteAverage={rating}></Rating>
              {dispatch && (
                <Button
                  className={classes.button}
                  onClick={(e) => {
                    e.preventDefault();
                    reviewBook({
                      rating,
                      title,
                      summary,
                      publisher,
                      image_url,
                      author,
                      count,
                      id,
                    });
                  }}
                  variant="contained"
                  color="secondary"
                >
                  {callToAction}
                </Button>
              )}
            </div>
          </div>
          {/* </Card> */}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Rating voteCount={count} voteAverage={rating}></Rating>

          <Button
            onClick={(e) => {
              console.log("e.target", e.target);
            }}
            size="small"
          >
            Cancel
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
