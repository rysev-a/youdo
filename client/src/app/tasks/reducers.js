import {combineReducers} from 'redux'
import list from './list/reducers'
import create from './create/reducers'
import item from './item/reducers'


export default combineReducers({list, create, item})
