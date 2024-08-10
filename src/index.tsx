import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import Navigation from './navigation';
import { store } from './store/index';
import HomePage from './pages/HomePage';
import MyApp from './_app';

ReactDOM.render(
  <>
    <Provider store={store}>
      <MyApp Component={HomePage} />
    </Provider>
  </>,
  document.getElementById('root'),
);
