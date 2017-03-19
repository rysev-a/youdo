import React from 'react';
import {render} from 'react-dom';

import Navbar from 'app/navbar';
import tasks from 'app/tasks';
import profile from 'app/profile';
import map from 'app/map';
import store from 'app/core/store';


export default ()=> (
  <main>
    <Navbar/>
    {tasks}
    {profile}
    {map}
  </main>
)

