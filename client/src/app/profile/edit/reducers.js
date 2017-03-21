import constants from 'app/constants';
import Immutable from 'immutable';
import {combineReducers} from 'redux';


let defaultState = ()=> {
  return {
    email: '',
    first_name: '',
    last_name: ''
  }
}

function fields(state=defaultState(), action) {
  switch (action.type) {
    case constants.UPDATE_PROFILE_FORM:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    case constants.INIT_PROFILE_FORM:
    //case constants.RESET_PROFILE_FORM:
      return action.payload;

    default:
      return state;
  }
}

function errors(state=defaultState(), action) {
  switch (action.type) {
    case constants.SUBMIT_PROFILE_FORM_ERROR:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_PROFILE_FORM:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});

    case constants.SUBMIT_PROFILE_FORM_SUCCESS:
    case constants.RESET_PROFILE_FORM:
      return defaultState();

    default:
      return state;
  }
}

export default combineReducers({fields, errors});

