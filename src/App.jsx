import { Container, CssBaseline } from '@mui/material';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './pages/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Footer from './components/Footer/Footer';
import { Suspense, useContext, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { AppContext } from './context/AppContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthContext } from './context/authContext/AuthContext';
import Dashboard from './pages/Dashboard/Dashboard';
const App = () => {
  const { darkMode } = useContext(AppContext);
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem , 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#000',
        secondary: '#208080',
      },
      secondary: {
        main: '#f9D71C',
      },
    },
  });

  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('email'));
    setUser(user);
  }, []);

  console.log(user);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="false" disableGutters>
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/products/:personId"
                  element={<SingleProduct />}
                />

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route
                  path="/dashboard"
                  element={
                    user?.email ? <Dashboard /> : <Navigate to="/login" />
                  }
                />
              </Routes>
              <Footer />
            </Suspense>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
