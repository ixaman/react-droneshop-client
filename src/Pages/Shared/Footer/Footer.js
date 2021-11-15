import { Container, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box sx={{backgroundColor: '#313334', color: 'orange'}} px={{xs:3, sm:10}} py={{xs:5,sm:10}}>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Help</Box>
                    <Box>
                        <Link to="/" color="inherit">Contact</Link>
                    </Box>
                    <Box>
                        <Link to="/" color="inherit">Support</Link>
                    </Box>
                    <Box>
                        <Link to="/" color="inherit">Privacy</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Account</Box>
                    <Box>
                        <Link to="/" color="inherit">Login</Link>
                    </Box>
                    <Box>
                        <Link to="/" color="inherit">Register</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Messages</Box>
                    <Box>
                        <Link to="/" color="inherit">Backup</Link>
                    </Box>
                    <Box>
                        <Link to="/" color="inherit">History</Link>
                    </Box>
                    <Box>
                        <Link to="/" color="inherit">Roll</Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
