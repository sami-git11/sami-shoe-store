import { AppBar } from '@mui/material';
import './header.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import DesktopView from './DesktopView/DesktopView';
import MobileView from './MobileView/MobileView';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { navbar, setNavbar, mobileView, setMobileView } =
    useContext(AppContext);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
      // setDarkMode(false);
    } else {
      setNavbar(false);
      // setDarkMode(true);
    }
  };
  const selectClass = () => {
    const location = useLocation();
    if (location.pathname !== '/' || navbar === true) {
      return 'navbar active';
    } else {
      return 'navbar';
    }
  };
  const selectedClass = selectClass();

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    // Checking For Responsiveness
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return (
    <AppBar position="fixed" className={selectedClass}>
      {mobileView ? <MobileView /> : <DesktopView />}
    </AppBar>
  );
};

export default Header;
