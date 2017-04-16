import {combineReducers} from 'redux'
import constants from 'app/constants'


function data (state=[], action) {
  switch (action.type) {
    case constants.FETCH_NOTIFICATION_LIST_SUCCESS:
      return action.payload.data;

    case constants.READ_NOTIFICATION_SUCCESS:
      return state.map( notification => {
        if (notification.id === action.payload.id) {
          return action.payload;
        }

        return notification;
      });
      return state;


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
    case constants.FETCH_NOTIFICATION_LIST:
      return Object.assign({}, state, {processing: true});

    case constants.FETCH_NOTIFICATION_LIST_SUCCESS:
      return {
        processing: false,
        loaded: true,
        page: action.payload.page,
        page_count: action.payload.page_count
      };

    case constants.FETCH_NOTIFICATION_LIST_ERROR:
      return Object.assing({}, state, {processing: false});

    default:
      return state;
  }
}

export default combineReducers({data, status})
