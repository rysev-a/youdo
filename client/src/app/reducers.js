import {combineReducers} from 'redux'
import profile from 'app/profile/reducers'
import tasks from 'app/tasks/reducers'
import categories from 'app/categories/reducers'


export default combineReducers({profile, tasks, categories})
