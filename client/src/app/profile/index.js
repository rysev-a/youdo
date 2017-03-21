import React from 'react';
import {Component} from 'react';
import {Route} from 'react-router';

import Login from './login';
import Register from './register';
import Edit from './edit';
import Settings from './settings';


export default (
  <Route path='/profile'>
    <Route path='/profile/login' component={Login}/>
    <Route path='/profile/register' component={Register}/>
    <Route path='/profile/edit' component={Edit}/>
    <Route path='/profile/settings' component={Settings}/>
  </Route>
)
