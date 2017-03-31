import {combineReducers} from 'redux'
import constants from 'app/constants'
import offerReducer from './offer'


function data (state=[], action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
      return action.payload.map(offer => offerReducer({}, {
        type: action.type,
        payload: offer
      }));

    case constants.UPDATE_OFFER_DIALOG:
    case constants.OPEN_OFFER_DIALOG:
    case constants.INIT_OFFER_DIALOG:
    case constants.CLOSE_OFFER_DIALOG:
      return state.map(offer => offerReducer(offer, action));

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
