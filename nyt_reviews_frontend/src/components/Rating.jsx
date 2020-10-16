import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    // zIndex: 99,
  },
}));
export default function SimpleRating({ onStartReview,id, voteAverage, voteCount }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(voteAverage);
  return (
    <div>
      <Box
        className={classes.root}
        component="fieldset"
        mb={3}
        borderColor="transparent"
      >
        <Rating
          onChange={(event, newValue) => {
            event.stopPropagation();
            onStartReview({userRating:newValue})
          }}
          precision={0.5}
          value={value}
          name={id}
        />
        {/* <Typography component="legend">Read only</Typography> */}
        {voteCount ? (
          <span> {voteCount} Reviews </span>
        ) : (
          <span> Be the first to review! </span>
        )}
      </Box>
    </div>
  );
}
