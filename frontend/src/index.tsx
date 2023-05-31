import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css'
import Login from './pages/Login';

const container = document.getElementById('root');

const root = createRoot(container!);
// eslint-disable-next-line
root.render(
  <React.StrictMode>
    <Login / >
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
