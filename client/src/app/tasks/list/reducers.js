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
    loaded: false
  }
};

function status (state=defaultStatus(), action) {
  switch (action.type) {
    case constants.FETCH_TASK_LIST:
      return Object.assign({}, state, {processing: true});

    case constants.FETCH_TASK_LIST_SUCCESS:
      return {
        processing: false,
        loaded: true
      };

    case constants.FETCH_TASK_LIST_ERROR:
      return Object.assing({}, state, {processing: false});

    case constants.RESET_TASK_LIST:
      return defaultStatus();

    default:
      return state;
  }
}

function pagination (state={page: 1, page_count: 0}, action) {
  switch (action.type) {
    case constants.FETCH_TASK_LIST_SUCCESS:
      return Object.assign({}, state, {
        page_count: action.payload.page_count
      });

    case constants.UPDATE_TASK_LIST_PAGINATION:
      return Object.assign({}, state, action.payload);

    case constants.RESET_TASK_LIST:
      return {page: 1, page_count: 0};

    case constants.SET_TASK_LIST_FILTER:
    case constants.UPDATE_TASK_LIST_FILTER:
      return Object.assign({}, state, {
        page: 1
      });

    default:
      return state;
  }
}

const defaultFilterState = ()=> ({
  statuses: []
});

function filter (state=defaultFilterState(), action) {
  switch (action.type) {
    case constants.SET_TASK_LIST_FILTER:
      return Object.assign({}, defaultFilterState(), action.payload);

    case constants.UPDATE_TASK_LIST_FILTER:
      return Object.assign({}, state, action.payload);

    case constants.RESET_TASK_LIST:
      return defaultFilterState();

    default:
      return state;
  }
}

function sort (state={type: 'create_datetime', order: 'asc'}, action) {
  switch (action.type) {
    case constants.UPDATE_TASK_LIST_SORT:
      return Object.assign({}, state, action.payload);

    case constants.RESET_TASK_LIST:
      return {type: 'create_datetime', order: 'asc'};

    default:
      return state;
  }
}

export default combineReducers({
  data,
  status,
  sort,
  filter,
  pagination
})
