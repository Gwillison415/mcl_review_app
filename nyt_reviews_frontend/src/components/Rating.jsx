import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  }
}));
export default function SimpleRating({ voteAverage, voteCount }) {
  const classes = useStyles();
  const rating = voteAverage / 2;
  return (
    <div className={classes.root}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating precision={0.5} name="read-only" value={rating} readOnly />
        {/* <Typography component="legend">Read only</Typography> */}
        <span> {voteCount} Reviews </span>
      </Box>
    </div>
  );
}
