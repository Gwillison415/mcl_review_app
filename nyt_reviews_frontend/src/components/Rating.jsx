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
export default function SimpleRating({ voteAverage, voteCount }) {
  const classes = useStyles();
  console.log('voteAverage', voteAverage)
  const [value, setValue] = React.useState(voteAverage);
  console.log("value", value);
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
            console.log("typeof newValue", typeof newValue);
            console.log(" newValue",  newValue);
            setValue(newValue);
          }}
          precision={0.5}
          // value={value}
          name="controlled"
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
