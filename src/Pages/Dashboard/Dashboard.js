import {
  faCartPlus,
  faCommentAlt,
  faCreditCard,
  faListAlt,
  faSignInAlt,
  faTasks,
  faUsersCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
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
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MakeReviews from "./MakeReviews/MakeReviews";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";

const listicon = <FontAwesomeIcon icon={faListAlt} size="lg" />;
const reviewicon = <FontAwesomeIcon icon={faCommentAlt} size="lg" />;
const payicon = <FontAwesomeIcon icon={faCreditCard} size="lg" />;
const logouticon = <FontAwesomeIcon icon={faSignInAlt} size="lg" />;
const manageordericon = <FontAwesomeIcon icon={faTasks} size="lg" />;
const addproducticon = <FontAwesomeIcon icon={faCartPlus} size="lg" />;
const makeadminicon = <FontAwesomeIcon icon={faUsersCog} size="lg" />;

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
      <Link style={{textDecoration: 'none'}} to="/home">
        <h4><strong><span className="text-black">DRONE</span><span className="text-danger">SHOP</span>  </strong></h4>
      </Link>
      {!admin && (
        <Box sx={{ mt: 5 }}>
          <Divider sx={{ mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/myorders`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {listicon} My Orders
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/makereview`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {reviewicon} Make Reviews
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/payment`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {payicon} Make Payment
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link style={{ textDecoration: "none", color: "Black" }} to="/login">
            <span
              sx={{ fontWeight: "bolder", pt: 5 }}
              onClick={logOut}
              color="inherit"
            >
              {logouticon} LogOut
            </span>
          </Link>
          <Divider sx={{ mt: 5 }} />
        </Box>
      )}
      {/* admin start */}
      {admin && (
        <Box sx={{ mt: 3 }}>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            sx={{ pt: 5 }}
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/manageorders`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {manageordericon} Manage Orders
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/manageproducts`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {manageordericon} Manage Products
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/addproduct`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {addproducticon} Add Product
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/makeadmin`}
          >
            <span sx={{ fontWeight: "bolder", pt: 5 }} color="inherit">
              {makeadminicon} Make Admin
            </span>
          </Link>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Link style={{ textDecoration: "none", color: "Black" }} to="/login">
            <span
              sx={{ fontWeight: "bolder", pt: 5 }}
              onClick={logOut}
              color="inherit"
            >
              {logouticon} LogOut
            </span>
          </Link>
          <Divider sx={{ mt: 5 }} />
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
              <Box>
                {admin ? (
                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    noWrap
                    component="div"
                  >
                    Admin Dashboard
                  </Typography>
                ) : (
                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    noWrap
                    component="div"
                  >
                    User Dashboard
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box></Box>
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
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/makereview`}>
            <MakeReviews></MakeReviews>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageorders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          {admin ?
            <Route exact path={path}>
            <ManageOrders></ManageOrders>
          </Route> :
          <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
          }
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
