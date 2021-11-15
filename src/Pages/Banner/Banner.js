import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-8 col-md-6 col-sm-12">
                <div className="col-md">
                  <h5 className="title">New Arrival !</h5>
                  <h3 className="title">Get Exciting Offers On Pre-booking</h3>
                  <br />
                  <Link to="/products">
                    <button className="mt-3 about-btn">
                      <strong>Explore More</strong>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-4  col-md-6 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
