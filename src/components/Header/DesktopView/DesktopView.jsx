import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import Searchbar from '../Searchbar/Searchbar';
import { Link as LinkR } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext/AuthContext';
import './style.css';

const DesktopView = () => {
  const { navbar, darkMode, setDarkMode } = useContext(AppContext);
  const { user, setUser } = useContext(AuthContext);
  const selectClass = () => {
    const location = useLocation();
    if (location.pathname !== '/' || navbar === true) {
      return 'active-navitem';
    } else {
      return 'nav-items';
    }
  };
  const selectedClass = selectClass();

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Grid container spacing={2} display="flex" alignItems="center">
      <Grid item md={3} display="flex" justifyContent="center">
        <Searchbar />
      </Grid>
      <Grid item md={5} display="flex" justifyContent="center">
        <Typography variant="h2">
          <LinkR to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Shoe Store
          </LinkR>
        </Typography>
      </Grid>
      <Grid item md={4} display="flex" justifyContent="center">
        <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              Sneakers
            </Typography>
          </Link>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              Store
            </Typography>
          </Link>
          {user?.email ? (
            <LinkR to="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" className={selectedClass}>
                Dashboard
              </Typography>
            </LinkR>
          ) : (
            <LinkR to="/login" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" className={selectedClass}>
                Login
              </Typography>
            </LinkR>
          )}
          {user && (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => {
                setUser(null);
                localStorage.clear();
              }}
            >
              Logout
            </Button>
          )}
          <Typography
            variant="body1"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
          >
            {darkMode ? (
              <WbSunnyIcon color="secondary" />
            ) : (
              <ModeNightIcon style={{ color: '#90c0df' }} />
            )}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DesktopView;
