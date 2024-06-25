import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/E-Pharmacy">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
