import {combineReducers} from 'redux'
import list from './list/reducers'
import create from './create/reducers'


export default combineReducers({list, create})
