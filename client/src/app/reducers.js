import {combineReducers} from 'redux'
import profile from 'app/profile/reducers'
import tasks from 'app/tasks/reducers'
import categories from 'app/categories/reducers'
import offers from 'app/offers/reducers'
import notifications from 'app/notifications/reducers'


export default combineReducers({
  profile,
  tasks,
  categories,
  offers,
  notifications
})
