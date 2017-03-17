import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import {AppView, StartView, UserView} from './view';


class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <nav>
            <NavLink activeClassName="active" to='/'>home</NavLink>
            <NavLink activeClassName="active" to='/data'>data</NavLink>
            <NavLink activeClassName="active" to='/users'>users</NavLink>

          </nav>
          <Switch>
            <Route exact={true} path='/' component={StartView}/>
            <Route path='/data' component={AppView}/>
            <Route path='/users' component={UserView}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
