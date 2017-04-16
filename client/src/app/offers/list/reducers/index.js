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
    case constants.ACCEPT_OFFER_DIALOG_SUCCESS:
    case constants.CONFIRM_OFFER_DIALOG_SUCCESS:
    case constants.COMPLETE_OFFER_DIALOG_SUCCESS:
      return state.map(offer => offerReducer(offer, action));

    case constants.SUBMIT_OFFER_CREATE_SUCCESS:
      return [...state, offerReducer({}, action)];

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
    case constants.FETCH_OFFER_LIST:
      return Object.assign({}, state, {processing: true});

    case constants.FETCH_OFFER_LIST_ERROR:
      return Object.assign({}, state, {processing: false});

    case constants.FETCH_OFFER_LIST_SUCCESS:
      return Object.assign({}, state, {
        loader: true,
        processing: false
      });

    default:
      return state;
  }
}

export default combineReducers({data, status})
