import React from 'react';
import {render} from 'react-dom';
import store from 'app/core/store';
import actions from 'app/profile/current/actions';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
//import modules
import Navbar from 'app/navbar';
import profile from 'app/profile';
import tasks from 'app/tasks';
import map from 'app/map';

// init user
store.dispatch(actions.fetch());

export default ()=> (
  <main>
    <Navbar/>
    {profile}
    {tasks}
    {map}
  </main>
)



