import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { AuthContextPorvider } from './context/authContext/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <AuthContextPorvider>
        <App />
      </AuthContextPorvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
