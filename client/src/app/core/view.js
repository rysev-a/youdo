import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';


export class AppView extends Component {
  render() {
    return <div className="container">
      <h1>hello</h1>
    </div>;
  }
}

export class UserView extends Component{
  render() {
    return <div>
      <div>User page</div>
      <NavLink activeClassName="active" to='/users/item1'>user 1</NavLink>
      <NavLink activeClassName="active" to='/users/item2'>user 2</NavLink>


      <Switch>
        <Route path='/users/item1' render={()=> {
          return <div>user page 1</div>
        }}/>
        <Route path='/users/item2' render={()=> {
          return <div>user page 2</div>
        }}/>
      </Switch>

    </div>;
  }
}

export class StartView extends Component{
  render() {
    return <div>Start page</div>;
  }
}
