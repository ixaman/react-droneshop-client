import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import useProducts from "../../hooks/useProducts";
const trashicon = <FontAwesomeIcon icon={faTrashAlt} />;

const SingleProduct = (props) => {
  const { products, setProducts } = useProducts();
  const { name, image, price, description, _id } = props.product;

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://obscure-plains-97206.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
            alert("Deleted Successfully");
            window.location.reload();
          }
        });
    }
  };

  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
          <CardMedia
            component="img"
            style={{ width: "auto", height: " 80px", margin: "0 auto" }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography sx={{ my: 3 }} variant="h5" color="text.secondary">
              Price: <strong>${price}</strong>
            </Typography>
            <button onClick={ ()=>handleDeleteProduct(_id)} type="button" class="btn btn-danger btn-sm">
              {trashicon} Remove
            </button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SingleProduct;
