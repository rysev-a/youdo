import {combineReducers} from 'redux';
import login from './login/reducers';
import register from './register/reducers';
import current from './current/reducers';


export default combineReducers({login, register, current})
