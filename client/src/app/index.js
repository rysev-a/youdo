import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from 'app/bootstrap/store';
import App from 'app/bootstrap';


render(<Provider store={store}><App/></Provider>,
       document.getElementById('app'));
