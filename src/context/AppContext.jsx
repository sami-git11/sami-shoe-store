import { createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  return (
    <AppContext.Provider
      value={{
        navbar,
        setNavbar,
        darkMode,
        setDarkMode,
        mobileView,
        setMobileView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
