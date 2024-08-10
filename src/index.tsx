import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import Navigation from './navigation';

const storeB: any = {};

ReactDOM.render(
  <>
    <Provider store={storeB}>
      <Navigation />
    </Provider>
  </>,
  document.getElementById('root'),
);
