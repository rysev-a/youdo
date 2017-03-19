import {combineReducers} from 'redux';
import profile from 'app/profile/reducers';
import {routerReducer} from 'react-router-redux'

export default combineReducers({profile, router: routerReducer})
