import { Grid } from '@mui/material';
import React from 'react';

import './style.css';
const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      className="dashboard-container"
      style={{ marginTop: 160, marginBottom: 100 }}
    >
      <Grid item xs={12}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886255.2161928591!2d71.03105062768418!3d29.80843839965711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b331ad584cd6d%3A0xe99a374f18c08077!2sPizza%20Max%20-%20Gulgasht%20Colony!5e0!3m2!1sen!2sus!4v1645989758852!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
