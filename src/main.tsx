import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './ts-01/components/App'; //? ts-01
// import './ts-01/index.css'; //? ts-01

// import { App } from './ts-02/Feedbacks/components/App'; //? ts-02-Feedbacks
// import { GlobalStyle } from './ts-02/Feedbacks/components/GlobalStyles'; //? ts-02-Feedbacks

// import { App } from './ts-02/Phonebook/components/App'; //? ts-02-Phonebook
// import "./ts-02/Phonebook/index.css"; //? ts-02-Phonebook

// import App from './ts-03/components/App/App-03'; //? ts-03
// import './ts-03/index.css'; //? ts-03

// import { BrowserRouter } from 'react-router-dom'; //? ts-04
// import { App } from './ts-04/components/App/App'; //? ts-04
// import GlobalStyle from './ts-04/GlobalStyles'; //? ts-04

// import { Provider } from 'react-redux'; //? ts-05-Phonebook
// import { PersistGate } from 'redux-persist/integration/react'; //? ts-05-Phonebook
// import App from './ts-05/components/App'; //? ts-05-Phonebook
// import './ts-05/index.css'; //? ts-05-Phonebook
// import { persistor, store } from './ts-05/redux/store'; //? ts-05-Phonebook

import { Provider } from 'react-redux';
import App from './ts-06/components/App';
import './ts-06/index.css'; //? ts-06-Phonebook
import { store } from './ts-06/redux/store'; //? ts-06-Phonebook

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <BrowserRouter> */}
        <App />
        {/* <GlobalStyle /> */}
        {/* </BrowserRouter> */}
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
