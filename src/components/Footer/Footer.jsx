import { Grid, Stack, Typography } from '@mui/material';
import Searchbar from '../Header/Searchbar/Searchbar';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="footer"
    >
      <Grid item xs={12}>
        <Typography variant="h1" color="white">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Shoe Store
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="white">
          Trending
        </Typography>
        <Stack color="whitesmoke" marginTop="20px">
          <Typography variant="body1" className="menu_item">
            Air Jordans
          </Typography>
          <Typography variant="body1" className="menu_item">
            Nike Air Force
          </Typography>
          <Typography variant="body1" className="menu_item">
            Nike Dunks
          </Typography>
          <Typography variant="body1" className="menu_item">
            Travis Scott sneakers
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="white">
          New Releases
        </Typography>
        <Stack color="whitesmoke" marginTop="20px">
          <Typography variant="body1" className="menu_item">
            Air Jordans
          </Typography>
          <Typography variant="body1" className="menu_item">
            Nike Air Force
          </Typography>
          <Typography variant="body1" className="menu_item">
            Nike Dunks
          </Typography>
          <Typography variant="body1" className="menu_item">
            Travis Scott sneakers
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="white">
          Account
        </Typography>
        <Stack color="whitesmoke" marginTop="20px">
          <Typography variant="body1" className="menu_item">
            My Account
          </Typography>
          <Typography variant="body1" className="menu_item">
            Track My Order
          </Typography>
          <Typography variant="body1" className="menu_item">
            Sell Sneakers
          </Typography>
          <Typography variant="body1" className="menu_item">
            Cookie Settings
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="white">
          About Us
        </Typography>
        <Stack color="whitesmoke" marginTop="20px">
          <Typography variant="body1" className="menu_item">
            Our History
          </Typography>
          <Typography variant="body1" className="menu_item">
            Stores
          </Typography>
          <Typography variant="body1" className="menu_item">
            Shipping & Returns
          </Typography>
          <Typography variant="body1" className="menu_item">
            Support
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="white">
          Sign Up For News & Promotions
        </Typography>
        <Stack color="whitesmoke" marginTop="20px">
          <input
            type="email"
            className="email_form"
            placeholder="Email address"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
