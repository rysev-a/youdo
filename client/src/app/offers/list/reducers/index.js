import {combineReducers} from 'redux'
import constants from 'app/constants'


function data (state=[], action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

const defaultStatus = ()=> {
  return {
    loaded: false
  }
};

function status (state=defaultStatus(), action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
      return {
        loaded: true
      };

    default:
      return state;
  }
}

export default combineReducers({data, status})
