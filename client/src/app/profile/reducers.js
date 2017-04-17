import {combineReducers} from 'redux'
import login from './login/reducers'
import register from './register/reducers'
import current from './current/reducers'
import edit from './edit/reducers'
import tasks from './tasks/reducers'


export default combineReducers({
  login,
  register,
  current,
  edit,
  tasks
})
