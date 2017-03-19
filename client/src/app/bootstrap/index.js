import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from 'app/navbar';

// import modules
import map from 'app/map';
import tasks from 'app/tasks';
import profile from 'app/profile';


import store from './store';
import profileCurrentActions from 'app/profile/current/actions';
store.dispatch(profileCurrentActions.fetch());


const App = ()=> (
  <BrowserRouter>
    <main>
      <Navbar/>
      {map}
      {tasks}
      {profile}
    </main>
  </BrowserRouter>
)

export default App
