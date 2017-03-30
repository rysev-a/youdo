import constants from 'app/constants'
import {combineReducers} from 'redux'


const defaultState = ()=> {
  return {
    message: 'Рад вашему отклику, надеюсь на качественное выполнение',
    price: 0
  }
};

function data (state=defaultState(), action) {
  switch (action.type) {
    case constants.INIT_OFFER_DIALOG:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_OFFER_DIALOG:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    default:
      return state;
  }
}

function errors (state=defaultState(), action) {
  switch (action.type) {
    case constants.RESET_OFFER_DIALOG:
      return defaultState();

    case constants.UPDATE_OFFER_DIALOG:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_OFFER_DIALOG_ERROR:
      return action.payload;

    default:
      return state;
  }
}

const defaultStatus = ()=> {
  return {
    isOpen: false,
    loaded: false
  }
};

function status(state=defaultStatus(), action) {
  switch (action.type) {
    case constants.OPEN_OFFER_DIALOG:
      return Object.assign({}, state, {isOpen: true});

    case constants.CLOSE_OFFER_DIALOG:
      return Object.assign({}, state, {isOpen: false});

    case constants.INIT_OFFER_DIALOG:
      return Object.assign({}, state, {loaded: true});

    case constants.RESET_OFFER_DIALOG:
      return defaultStatus();

    default:
      return state;
  }
}

export default combineReducers({data, errors, status})
