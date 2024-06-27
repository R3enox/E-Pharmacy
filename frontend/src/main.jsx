import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { style } from './style/style.js';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/E-Pharmacy">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={style}>
          <ToastContainer />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
