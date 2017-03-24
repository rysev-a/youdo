import {combineReducers} from 'redux'
import constants from 'app/constants'


function data (state=[], action) {
  switch (action.type) {
    case constants.FETCH_TASK_LIST_SUCCESS:
      return action.payload.data;

    default:
      return state;
  }
}

const defaultStatus = ()=> {
  return {
    loaded: false,
    page: 1,
    page_count: 0
  }
};

function status (state=defaultStatus(), action) {
  switch (action.type) {
    case constants.FETCH_TASK_LIST_SUCCESS:
      return {
        loaded: true,
        page: action.payload.page,
        page_count: action.payload.page_count
      };

    default:
      return state;
  }
}

export default combineReducers({data, status})
