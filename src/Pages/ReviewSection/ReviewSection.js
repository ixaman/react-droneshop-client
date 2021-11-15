import React from "react";
import useReviews from "../../hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";

const ReviewSection = () => {
  const { reviews } = useReviews();

  return (
    <>
      <h1 className="py-5">Customer Reviews</h1>
      <div className="container card-cont">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div><br /><br /><br />
    </>
  );
};

export default ReviewSection;
