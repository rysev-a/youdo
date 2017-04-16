import constants from 'app/constants'
import {combineReducers} from 'redux'


const defaultState = ()=> {
  return {
    message: 'Готов выполнить вашу задачу, буду рад сотрудничать',
    price: 0
  }
};

function data (state=defaultState(), action) {
  switch (action.type) {
    case constants.INIT_OFFER_CREATE:
      return Object.assign({}, state, action.payload);

    case constants.RESET_OFFER_CREATE:
      return defaultState();

    case constants.UPDATE_OFFER_CREATE:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    default:
      return state;
  }
}

function errors (state=defaultState(), action) {
  switch (action.type) {
    case constants.RESET_OFFER_CREATE:
      return defaultState();

    case constants.UPDATE_OFFER_CREATE:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_OFFER_CREATE_ERROR:
      return action.payload;

    default:
      return state;
  }
}

const defaultStatus = ()=> {
  return {
    isOpen: false,
    loaded: false,
    processing: false
  }
};

function status(state=defaultStatus(), action) {
  switch (action.type) {
    case constants.OPEN_OFFER_CREATE:
      return Object.assign({}, state, {isOpen: true});

    case constants.CLOSE_OFFER_CREATE:
      return Object.assign({}, state, {isOpen: false});

    case constants.INIT_OFFER_CREATE:
      return Object.assign({}, state, {loaded: true});

    case constants.SUBMIT_OFFER_CREATE:
      return Object.assign({}, state, {processing: true});

    case constants.SUBMIT_OFFER_CREATE_SUCCESS:
    case constants.SUBMIT_OFFER_CREATE_ERROR:
      return Object.assign({}, state, {processing: false});

    case constants.RESET_OFFER_CREATE:
      return defaultStatus();

    default:
      return state;
  }
}

export default combineReducers({data, errors, status})
