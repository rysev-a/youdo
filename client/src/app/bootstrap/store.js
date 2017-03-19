import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from 'app/bootstrap/reducers';

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

export const store = createStore(reducers, 
                           applyMiddleware(reduxRouterMiddleware, thunk))
