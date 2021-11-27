import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  const [state, setState] = React.useState(false);

  const theme = useTheme();

  const useStyle = makeStyles({
    navItem: {
      color: "orange",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    logoIcon: {
      color: "orange",
      textDecoration: "none",
      fontWeight: "bold",
    },
    logoIconContainer: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
  });

  const { navItem, navIcon, logoIcon, navItemContainer, logoIconContainer } =
    useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "black", flexGrow: 1 }}>
        <Container maxWidth="lg">
          <AppBar sx={{ backgroundColor: "black" }} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={logoIconContainer}
                variant="h5"
                sx={{ ml: 5, pl: 5 }}
              >
                <Link className={logoIcon} to="/">
                  DroneShopBD
                </Link>
              </Typography>
              <Box
                className={navItemContainer}
                component="div"
                sx={{
                  flexGrow: 1,
                  flexDirection: "row-reverse",
                  display: "inline-flex",
                  mx: 4,
                }}
              >
                {user?.email ? (
                  <Typography variant="h6" sx={{ mx: 4 }}>
                    <Link className={navItem} to="/dashboard">
                      Dashboard
                    </Link>
                  </Typography>
                ) : (
                  <Typography variant="h6" sx={{ mx: 4 }}>
                    <Link className={navItem} to="/login">
                      Login
                    </Link>
                  </Typography>
                )}
                <Typography variant="h6" sx={{ mx: 4 }}>
                  <Link className={navItem} to="/products" sx={{ mx: 5 }}>
                    Products
                  </Link>
                </Typography>
                <Typography variant="h6" sx={{ mx: 4 }}>
                  <Link className={navItem} to="/home">
                    Home
                  </Link>
                </Typography>
              </Box>

              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {user?.email ? (
                    <Box>
                      <MenuItem>
                        <Typography variant="h7">
                          Hello, <strong>{user.displayName}</strong>
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={logOut}>
                        <button type="button" class="btn btn-danger btn-sm">
                          SignOut
                        </button>
                      </MenuItem>
                    </Box>
                  ) : (
                    <MenuItem>
                      <Link to="/login">
                        <button type="button" class="btn btn-success btn-sm">
                          SignIn
                        </button>
                      </Link>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
        <div>
          <React.Fragment>
            <Drawer open={state} onClose={() => setState(false)}>
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  <ListItem button>
                    <ListItemText>
                      <Link className={navItem} to="/">
                        Home
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText>
                      <Link className={navItem} to="/products">
                        Products
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <Link className={navItem} to="/login">
                      Login
                    </Link>
                  </ListItem>
                </List>
                <Divider />
              </Box>
            </Drawer>
          </React.Fragment>
        </div>
      </Box>
    </>
  );
};

export default Navigation;
