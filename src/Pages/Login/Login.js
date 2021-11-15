import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChnage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = (e) => {
    signInWithGoogle(location, history);
    e.preventDefault();
  };

  return (
    <>
      <Container sx={{my:5,py:5}}>
        <Grid container spacing={2}>
          <Grid
            style={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
            md={6}
          >
            <div>
              <Typography variant="h6" gutterBottom>
                Login
              </Typography>
              <form onSubmit={handleSubmit} action="">
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnChnage}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnChnage}
                  variant="standard"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity="success">Login Successful!</Alert>
                )}
                {error && <Alert severity="error">{error}</Alert>}
              </form>
              <p>---------------Or--------------</p>
              <Button onClick={handleGoogleSignIn} variant="contained">
                Google Sign In
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
