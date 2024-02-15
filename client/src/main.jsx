import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./state/state.js"
import App from './App.jsx'; // or wherever your root component is located
import './index.css';

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers can be added here if you have more slices
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for now
    }),
});

// Render the root component wrapped with the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
