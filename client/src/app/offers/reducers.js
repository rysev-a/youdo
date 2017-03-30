import {combineReducers} from 'redux'
import create from './create/reducers'
import list from './list/reducers'
import dialog from './dialog/reducers'


export default combineReducers({create, list, dialog})
