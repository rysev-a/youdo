import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'app/bootstrap/reducers';

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(reduxRouterMiddleware, thunk))



import Navbar from 'app/navbar';
import map from 'app/map';
import tasks from 'app/tasks';
import profile from 'app/profile';


console.log(ConnectedRouter)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <Navbar/>
        {profile}
        {map}
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
