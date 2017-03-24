import constants from 'app/constants';
import Immutable from 'immutable';
import {combineReducers} from 'redux';


const defaultState = ()=> {
  return {
    first_name: '',
    email: '',
    password: ''
  }
};


function fields(state = defaultState(), action) {
  switch (action.type) {
    case constants.UPDATE_REGISTER_FORM:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    case constants.SUBMIT_REGISTER_FORM_SUCCESS:
    case constants.RESET_REGISTER_FORM:
      return defaultState();

    default:
      return state;
  }
}

function errors(state = defaultState(), action) {
  switch (action.type) {
    case constants.SUBMIT_REGISTER_FORM_ERROR:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_REGISTER_FORM:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_REGISTER_FORM_SUCCESS:
    case constants.RESET_REGISTER_FORM:
      return defaultState();

    default:
      return state;
  }
}

function status(state={loading: false}, action) {
  switch (action.type) {
    case constants.SUBMIT_REGISTER_FORM:
      return {loading: true};

    case constants.SUBMIT_REGISTER_FORM_SUCCESS:
    case constants.SUBMIT_REGISTER_FORM_ERROR:
      return {loading: false};

    default:
      return state;
  }
}

export default combineReducers({fields, errors, status});
