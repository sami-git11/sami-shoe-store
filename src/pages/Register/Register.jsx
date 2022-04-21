import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as LinkR } from 'react-router-dom';
import { register } from '../../context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://shoe-store.abdulsami.site/">
        sami shoe store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    register({
      email: data.get('email'),
      password: data.get('password'),
      captcha: captcha,
    });
    const message = JSON.parse(localStorage.getItem('message'));

    if (message?.message === 'Registered Successfully') {
      navigate('/login');
    }
  };

  const handleChange = (value) => {
    setCaptcha(value);
    console.log(captcha);
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginTop: 150, marginBottom: 80 }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid item xs={12}>
            <ReCAPTCHA
              sitekey="6Ldpa6YeAAAAAMRMIh5CFxDmSueqFhF8sJ1vC9uB"
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <LinkR to="/login">
                <Link variant="body2">Already have an account? Sign in</Link>
              </LinkR>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
