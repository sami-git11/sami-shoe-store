import { Grid } from '@mui/material';
import React from 'react';
import './style.css';
import animatedBoy from '../../images/walking-boy-transparent.gif';
import useWebAnimations from '@wellyshen/use-web-animations';

const AnimatedSection = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: 'translate(100%)',
    },
    animationOptions: {
      duration: 8000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: 'normal', // Run the animation forwards and then backwards
      //   easing: 'ease-in-out', // Use a fancy timing function
    },
  });
  return (
    <Grid container xs={2} className="animation-background">
      <Grid xs={12} className="animated-part" ref={ref}>
        <img src={animatedBoy} />
      </Grid>
    </Grid>
  );
};

export default AnimatedSection;
