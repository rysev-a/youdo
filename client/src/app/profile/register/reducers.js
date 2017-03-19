import constants from 'app/bootstrap/constants';
import Immutable from 'immutable';
import {combineReducers} from 'redux';


const defaultState = ()=> {
  return {
    first_name: '',
    email: '',
    password: ''
  }
}


function fields(state = defaultState(), action) {
  switch (action.type) {
    case constants.UPDATE_REGISTER_FORM:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    default:
      return state;
  }
}

function errors(state = defaultState(), action) {
  switch (action.type) {
    case constants.SUBMIT_REGISTER_FORM_ERROR:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_REGISTER_FORM:
      return state;

    default:
      return state;
  }
}

export default combineReducers({fields, errors});