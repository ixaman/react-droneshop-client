import React from "react";
import './SingleReview.css';

const SingleReview = (props) => {
    const {name,email,rating,remark} = props.review;
  return (
    <>
      <div className="container card-cont">
        <div class="card text-white bg-success  mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">{name}</div>
            <div class="card-body">
            <h5 class="card-title text-black">{rating} star</h5>
            <p class="card-text">
                {remark}
            </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
