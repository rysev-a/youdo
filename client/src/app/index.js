import React from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import {store, history} from 'app/bootstrap/store';
import Navbar from 'app/navbar';
import map from 'app/map';
import tasks from 'app/tasks';
import profile from 'app/profile';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <Navbar/>
        {tasks}
        {profile}
        {map}
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
