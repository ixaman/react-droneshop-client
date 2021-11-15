import React from "react";
import "./Reason.css";

const Reason = () => {
  return (
    <div>
      <h1 className="py-5">Why Us ?</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="img-con">
              <img className="img-fluid"
                src="https://dronenerds.s3.us-west-2.amazonaws.com/webimages/icons/DN-Services-Icons-Free-Shipping-Hover.png"
                alt=""
              />
            </div>
            <div className="text-con"><h5>FREE SHIPPING OVER $400</h5></div>
          </div>
          <div className="col-md-3">
            <div className="img-con">
              <img className="img-fluid"
                src="https://dronenerds.s3.us-west-2.amazonaws.com/webimages/icons/DN-Services-Icons-Money-Back-Hover.png"
                alt=""
              />
            </div>
            <div className="text-con"><h5>MONEY BACK GUARANTEE</h5></div>
          </div>
          <div className="col-md-3">
            <div className="img-con">
              <img className="img-fluid"
                src="https://dronenerds.s3.us-west-2.amazonaws.com/webimages/icons/DN-Services-Icons-Service-Hover.png"
                alt=""
              />
            </div>
            <div className="text-con"><h5>DEDICATED SERVICE</h5></div>
          </div>
          <div className="col-md-3">
            <div className="img-con">
              <img className="img-fluid"
                src="https://dronenerds.s3.us-west-2.amazonaws.com/webimages/icons/DN-Services-Icons-Support-Hover.png"
                alt=""
              />
            </div>
            <div className="text-con"><h5>ONLINE SUPPORT 24/7</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
