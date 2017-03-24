import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'

import TaskList from 'app/tasks/list'
import TaskCreate from 'app/tasks/create'
import TaskItem from 'app/tasks/item'


export default <Route path='/tasks'>
  <Route path="tasks">
    <Route path="/tasks/list" component={TaskList}/>
    <Route path="/tasks/create" component={TaskCreate}/>
    <Route path="/tasks/:id" component={TaskItem}/>
  </Route>
</Route>
