import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import view from 'app/core/view';
import tasks from 'app/tasks';
import Navbar from 'app/core/components/navbar';


class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <Route exact={true} path='/' component={view}/>
            <Route path='/tasks' component={tasks}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
