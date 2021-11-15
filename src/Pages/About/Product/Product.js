import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, name, image, price, description } = props.product;
  return (
    <div className="pack-card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="my-3">
        <h5>{name}</h5>
        <p className="p-3">{description}</p>
        <h5>
          Price: <strong>${price}</strong>
        </h5>
        <Link to={`/purchase/${_id}`}>
          <button className="btn btn-success mt-3">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
