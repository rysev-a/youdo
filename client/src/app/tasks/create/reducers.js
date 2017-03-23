import {combineReducers} from 'redux'
import constants from 'app/constants'


const defaultState = ()=> {
  return {
    name: '',
    description: '',
    price: '',
    category_id: ''
  }
};


function data (state=defaultState(), action) {
  switch (action.type) {
    case constants.RESET_TASK_CREATE:
      return defaultState();

    case constants.UPDATE_TASK_CREATE:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    default:
      return state;
  }
}

function errors (state=defaultState(), action) {
  switch (action.type) {
    case constants.RESET_TASK_CREATE:
      return defaultState();

    case constants.UPDATE_TASK_CREATE:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_TASK_CREATE_ERROR:
      return action.payload;

    default:
      return state;
  }
}

export default combineReducers({data, errors})
