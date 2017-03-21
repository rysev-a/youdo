import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from 'app/core/store';

import Navbar from 'app/navbar';
import profile from 'app/profile';
import tasks from 'app/tasks';
import actions from 'app/profile/current/actions';
store.dispatch(actions.fetch());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={(props)=> (
          <main>
            <Navbar/>
            {props.children}
          </main>
        )}>
        {profile}
        {tasks}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
