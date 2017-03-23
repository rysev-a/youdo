import {combineReducers} from 'redux'
import constants from 'app/constants'


const defaultState = ()=> {
  return {
    name: '',
    description: '',
    price: ''
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

export default combineReducers({data})
