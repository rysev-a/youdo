import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import Login from './login';
import Register from './register';

const profile = <Route path='/profile'>
  <Switch>
    <Route path='/profile/login' component={Login}/>
    <Route path='/profile/register' component={Register}/>
  </Switch>
</Route>;

export default profile
