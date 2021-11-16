import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Grid, Rating, Typography } from "@mui/material";
import React from "react";

const element = <FontAwesomeIcon icon={faUser} size="lg" />

const SingleReview = (props) => {
  const { name, email, rating, remark } = props.review;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
          {element}
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {remark}
            </Typography>
            <Rating sx={{my:2}} name="read-only" value={rating} readOnly />
          </CardContent>
        </Card><br /> <br /><br />
      </Grid>
    </>
  );
};

export default SingleReview;
