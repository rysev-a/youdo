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
    processing: false,
    loaded: false,
    page: 1,
    page_count: 0
  }
};

function status (state=defaultStatus(), action) {
  switch (action.type) {
    case constants.FETCH_TASK_LIST:
      return Object.assign({}, state, {processing: true});

    case constants.FETCH_TASK_LIST_SUCCESS:
      return {
        processing: false,
        loaded: true,
        page: action.payload.page,
        page_count: action.payload.page_count
      };

    case constants.FETCH_TASK_LIST_ERROR:
      return Object.assing({}, state, {processing: falsel});

    default:
      return state;
  }
}

function sort (state={type: 'create_datetime', order: 'asc'}, action) {
  switch (action.type) {
    case constants.UPDATE_TASK_LIST_SORT:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export default combineReducers({data, status, sort})
