import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './ts-01/components/App'; //? ts-01
// import './ts-01/index.css'; //? ts-01

import { App } from './ts-02/Feedbacks/components/App'; //? ts-02-Feedbacks
import { GlobalStyle } from './ts-02/Feedbacks/components/GlobalStyles'; //? ts-02-Feedbacks

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
