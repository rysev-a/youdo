import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from 'app/bootstrap/reducers';
import browserHistory from 'app/core/browser-history';


export default createStore(
  reducers, 
  applyMiddleware(routerMiddleware(browserHistory), thunk)
)
