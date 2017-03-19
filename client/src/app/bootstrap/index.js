import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import login from 'app/profile/login';
import register from 'app/profile/register';

import view from './view';
import Navbar from 'app/navbar';

import tasks from 'app/tasks';
import profile from 'app/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <Route exact={true} path='/' component={view}/>
            {tasks}
            {profile}
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
