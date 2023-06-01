import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css'
import Navigation from './Navigation';

const container = document.getElementById('root');

// eslint-disable-next-line
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Navigation / >
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
