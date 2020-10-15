import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "./Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "left",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imagePlaceholder: {
    display: "flex",
    minHeight: 100,
    minWidth:150,
    backgroundColor:  'lightgrey'
  },
  container:{
    padding:16,
    backgroundColor: 'white'
  }
}));

export default function MediaCard({
rating, title,summary, publisher, image_url, author, count
}) {
  const classes = useStyles();
  const theme = useTheme();

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
          <Rating voteCount={count} voteAverage={rating}></Rating>
          <div className={classes.controls}></div>
        </div>
      </Card>
    </div>
  );
}
