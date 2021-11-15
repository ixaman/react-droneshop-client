import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MakeReviews from "./MakeReviews/MakeReviews";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
        {!admin &&
          <Box sx={{mt:3}}>
        <Divider sx={{mt:5}} />
      <Link
        style={{ textDecoration: "none", color: "Black" }}
        to={`${url}/myorders`}
      >
        <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">My Orders</Button>
      </Link>
      <Divider sx={{mt:5}} />
      <Link
        style={{ textDecoration: "none", color: "Black" }}
        to={`${url}/makereview`}
      >
        <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Make Reviews</Button>
      </Link>
      <Divider sx={{mt:5}} />
        <Link
          style={{ textDecoration: "none", color: "Black" }}
          to={`${url}/payment`}
        >
          <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Make Payment</Button>
        </Link>
        <Divider sx={{mt:5}} />
        <Link style={{ textDecoration: "none", color: "Black" }} to="/login">
          <Button sx={{fontWeight: 'bolder', pt:5}} onClick={logOut} color="inherit">
            LogOut
          </Button>
        </Link>
        <Divider sx={{mt:5}} />
        </Box>}
        {/* admin start */}
        {admin && (
          <Box sx={{mt:3}}>
            <Divider sx={{mt:5}} />
            <Link
              sx={{pt:5}}
              style={{ textDecoration: "none", color: "Black" }}
              to={`${url}/manageorders`}
            >
              <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Manage Orders</Button>
            </Link>
            <Divider sx={{mt:5}} />
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to={`${url}/manageproducts`}
            >
              <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Manage Products</Button>
            </Link>
            <Divider sx={{mt:5}} />
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to={`${url}/addproduct`}
            >
              <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Add Product</Button>
            </Link>
            <Divider sx={{mt:5}} />
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to={`${url}/makeadmin`}
            >
              <Button sx={{fontWeight: 'bolder', pt:5}} color="inherit">Make Admin</Button>
            </Link>
            <Divider sx={{mt:5}} />
            <Link style={{ textDecoration: "none", color: "Black" }} to="/login">
              <Button sx={{fontWeight: 'bolder', pt:5}} onClick={logOut} color="inherit">
                LogOut
              </Button>
            </Link>
            <Divider sx={{mt:5}} />

          </Box>
        )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={8}>
          <Box >
          {admin ? 
            <Typography sx={{textAlign: 'left'}} variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography> :
            <Typography sx={{textAlign: 'left'}} variant="h6" noWrap component="div">
            User Dashboard
          </Typography>
          }
          </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
            <Link to="/home"><button className="btn btn-danger">Back To Shop</button></Link>
          </Box>
          </Grid>
        </Grid>
          
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/makereview`}>
            <MakeReviews></MakeReviews>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
