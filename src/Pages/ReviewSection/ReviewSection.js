import { Grid } from "@mui/material";
import React from "react";
import useReviews from "../../hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";
import './ReviewSection.css';

const ReviewSection = () => {
  const { reviews } = useReviews();

  return (
    <div className="container">
      <h1 className="py-5">Customer Reviews</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </Grid>
    </div>
  );
};

export default ReviewSection;
