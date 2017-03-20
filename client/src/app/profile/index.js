import React from 'react';
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './login';
import Register from './register';
import Edit from './edit';
import Settings from './settings';


export default (
  <Route path='/profile'>
    <Switch>
      <Route path='/profile/login' component={Login}/>
      <Route path='/profile/register' component={Register}/>
      <Route path='/profile/edit' component={Edit}/>
      <Route path='/profile/settings' component={Settings}/>
    </Switch>
  </Route>
)
