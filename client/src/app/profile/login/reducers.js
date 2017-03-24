import constants from 'app/constants';
import Immutable from 'immutable';
import {combineReducers} from 'redux';


let defaultState = ()=> {
  return {
    email: '',
    password: ''
  }
}

function fields(state=defaultState(), action) {
  switch (action.type) {
    case constants.UPDATE_LOGIN_FORM:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    case constants.SUBMIT_LOGIN_FORM_SUCCESS:
    case constants.RESET_LOGIN_FORM:
      return defaultState();

    default:
      return state;
  }
}

function errors(state=defaultState(), action) {
  switch (action.type) {
    case constants.SUBMIT_LOGIN_FORM_ERROR:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_LOGIN_FORM:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_LOGIN_FORM_SUCCESS:
    case constants.RESET_LOGIN_FORM:
      return defaultState();

    default:
      return state;
  }
}

function status(state={loading: false}, action) {
  switch (action.type) {
    case constants.SUBMIT_LOGIN_FORM:
      return {loading: true};

    case constants.SUBMIT_LOGIN_FORM_SUCCESS:
    case constants.SUBMIT_LOGIN_FORM_ERROR:
      return {loading: false};

    default:
      return state;
  }
}

export default combineReducers({fields, errors, status});

