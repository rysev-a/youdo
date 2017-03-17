import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from 'app/core/store';
import App from 'app/core';


render(<App/>,
       document.getElementById('app'));
