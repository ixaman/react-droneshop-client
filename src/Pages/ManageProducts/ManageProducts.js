import { Grid } from "@mui/material";
import React from "react";
import useProducts from "../../hooks/useProducts";
import SingleProduct from "../SingleProduct/SingleProduct";

const ManageProducts = () => {
  const { products} = useProducts();
  
  return (
    <div className="container">
        <h1 className="pb-5">Manage Producs</h1>
      <Grid
        rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 5 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <SingleProduct 
          key={product._id} 
          product={product}
          ></SingleProduct>
        ))}
      </Grid>
    </div>
  );
};

export default ManageProducts;
