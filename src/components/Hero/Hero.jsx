import { Grid, Link, Typography } from '@mui/material';
import { Link as LinkR } from 'react-router-dom';
import React from 'react';
import './style.css';
const Hero = () => {
  return (
    <Grid container spacing={2} className="hero">
      <Grid item xs={12} sm={12} className="hero-content">
        <Typography variant="h3" align="left" className="hero_product_name">
          AIR JORDAN 5 RETRO <br /> 'RACER BLUE'
        </Typography>

        <LinkR to="/products/1" style={{ color: '#fff' }}>
          <Typography variant="subtitle1" marginTop="30px">
            Shop Now
          </Typography>
        </LinkR>
      </Grid>
    </Grid>
  );
};

export default Hero;
