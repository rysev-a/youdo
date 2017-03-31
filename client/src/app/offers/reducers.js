import {combineReducers} from 'redux'
import create from './create/reducers'
import list from './list/reducers'


export default combineReducers({create, list})
