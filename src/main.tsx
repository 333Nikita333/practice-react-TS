import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './ts-01/components/App'; //? ts-01
// import './ts-01/index.css'; //? ts-01

// import { App } from './ts-02/Feedbacks/components/App'; //? ts-02-Feedbacks
// import { GlobalStyle } from './ts-02/Feedbacks/components/GlobalStyles'; //? ts-02-Feedbacks

// import { App } from './ts-02/Phonebook/components/App'; //? ts-02-Phonebook
// import "./ts-02/Phonebook/index.css"; //? ts-02-Phonebook

import App from './ts-03/components/App/App'; //? ts-03
import './ts-03/index.css'; //? ts-03

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <GlobalStyle /> */}
  </React.StrictMode>
);
