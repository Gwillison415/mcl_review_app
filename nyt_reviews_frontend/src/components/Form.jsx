import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Rating from "./Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function Form({ formValues, count, id, setFormValues }) {
  const { reviewText, reviewTitle, rating } = formValues;
  const classes = useStyles();
  const handleSummaryChange = (event) => {
    setFormValues({
      ...formValues,
      reviewText: event.target.value,
    });
  };
  const handleTitleChange = (event) => {
    setFormValues({
      ...formValues,
      reviewTitle: event.target.value,
    });
  };
  const handleRatingChange = ({ userRating }) => {
    setFormValues({
      ...formValues,
      rating: userRating,
    });
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-margin-dense"
        value={reviewTitle}
        className={classes.textField}
        placeholder={reviewTitle}
        helperText="Title your review"
        margin="dense"
        label="Title"
        variant="outlined"
        onChange={handleTitleChange}
      />
      <Rating
        onStartReview={handleRatingChange}
        id={id}
        voteCount={count}
        voteAverage={rating}
      ></Rating>

      <TextField
        id="outlined-full-width"
        label="Summary"
        style={{ margin: 8 }}
        placeholder={reviewText}
        value={reviewText}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleSummaryChange}
      />
    </div>
  );
}
