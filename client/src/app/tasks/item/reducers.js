import {combineReducers} from 'redux'
import constants from 'app/constants'


const defaultState = ()=> {
  return {
    name: '',
    description: '',
    price: ''
  };
};


function data(state=defaultState(), action) {
  switch (action.type) {
    case constants.FETCH_TASK_ITEM_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

function status(state={loaded: false}, action) {
  switch (action.type) {
    case constants.FETCH_TASK_ITEM:
      return {loaded: false};

    case constants.FETCH_TASK_ITEM_SUCCESS:
      return {loaded: true};

    case constants.RESET_TASK_ITEM:
      return {loaded: false};

    default:
      return state;
  }
}

export default combineReducers({data, status})
