/*THIS IS THE APP ENTRY POINT*/
/*THIS IS THE APP ENTRY POINT*/
/*THIS IS THE APP ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();