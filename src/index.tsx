import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import Navigation from './navigation';
import { store } from './store/index';

ReactDOM.render(
  <>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </>,
  document.getElementById('root'),
);
