import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

import FindTask from 'app/tasks/find';
import AddTask from 'app/tasks/add';

const tasks = <Route path='/tasks'>
  <Route path="tasks">
    <Route path="/tasks/find" component={FindTask}/>
    <Route path="/tasks/add" component={AddTask}/>
  </Route>
</Route>;

export default tasks
