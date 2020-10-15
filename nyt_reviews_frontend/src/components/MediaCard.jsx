import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography,Button,CardContent,CardMedia } from "@material-ui/core";
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
}) {
  const classes = useStyles();

  // const image = backdrop_path? backdrop_path: poster_path
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
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
          {/* </div>
          <div className={classes.controls}> */}
            <Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
              }}
              variant="contained"
              color="secondary"
            >
              Review this Book
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
