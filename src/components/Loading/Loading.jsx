import React from 'react';
import { Grid } from '@mui/material';
import LoadingGif from '../../images/loading.gif';
const Loading = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: '200px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12}>
        <img src={LoadingGif} alt="Loading" />
      </Grid>
    </Grid>
  );
};

export default Loading;
