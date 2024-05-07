import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
// import './HomeTPL.css'; // Import custom CSS file for additional styling
import NAACLogo from "../assets/naac.png";

const HomeTPL = () => {
  return (
    <Container>
      <div id='home-tpl'>
        <img src={NAACLogo}></img>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to NAAC Assistant Portal
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Your one-stop solution for NAAC accreditation assistance.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/dashboard" // Replace "/dashboard" with the actual link to your dashboard
          className="cta-button"
        >
          Go to Dashboard
        </Button>
      </div>
    </Container>
  );
};

export default HomeTPL;
