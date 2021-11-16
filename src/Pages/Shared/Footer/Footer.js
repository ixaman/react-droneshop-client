import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{ backgroundColor: "#313334", color: "orange", mt: 5 }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid textAlign="left" item xs={12} sm={4}>
              <Box sx={{ fontSize: "20px", mb: 3 }} borderBottom={1}>
                About us
              </Box>
              <Box>
                <Typography>
                  <strong>DroneShoBD</strong> is the largest UAV dealer in the
                  United States and we are DJI's largest and most experienced
                  authorized service center in the Bangladesh.
                </Typography>
              </Box>
            </Grid>
            <Grid textAlign="left" item xs={12} sm={4}>
              <Box sx={{ fontSize: "20px", mb: 2 }} borderBottom={1}>
                Contact
              </Box>
              <Box>
                <Typography>Telephone: 1-564-124-33288</Typography>
              </Box>
              <Box>
                <Typography>Address: Dhaka, Bangladesh</Typography>
              </Box>
              <Box>
                <Typography>Email: iasadxaman@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid textAlign="left" item xs={12} sm={4}>
              <Box sx={{ fontSize: "20px", mb: 2 }} borderBottom={1}>
                Newsletter
              </Box>
              <Box>
                <TextField label="Your E-mail" color="warning" focused />
              </Box><br />
              <Box>
                <Button variant="contained" color="success">
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            DroneShopBD &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
