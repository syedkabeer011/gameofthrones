import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { store } from './store/configureStore';

// import * as serviceWorker from './serviceWorker';

function AppBundle() {

  return (
    
      <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ReduxProvider>
    
  );
}

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<AppBundle />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
