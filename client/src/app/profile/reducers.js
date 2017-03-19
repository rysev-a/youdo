import {combineReducers} from 'redux';
import login from './login/reducers';
import register from './register/reducers';


export default combineReducers({login, register})
