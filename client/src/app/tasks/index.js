import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import FindTask from 'app/tasks/find';
import AddTask from 'app/tasks/add';

const tasks = <Route path='/tasks'>
  <Switch>
    <Route path='/tasks/find' component={FindTask}/>
    <Route path='/tasks/add' component={AddTask}/>
  </Switch>
</Route>;

export default tasks
