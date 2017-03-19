import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'

import store from 'app/core/store';
import browserHistory from 'app/core/browser-history';
import App from 'app/bootstrap';


render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
