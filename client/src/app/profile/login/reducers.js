import constants from 'app/bootstrap/constants';
import Immutable from 'immutable';
import {combineReducers} from 'redux';


function fields(state = {email: '', password: ''}, action) {
  switch (action.type) {
    case constants.UPDATE_LOGIN_FORM:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});

    default:
      return state;
  }
}

function errors(state = {email: '', password: ''}, action) {
  switch (action.type) {
    case constants.SUBMIT_LOGIN_FORM_ERROR:
      return Object.assign({}, state, action.payload);

    case constants.UPDATE_LOGIN_FORM:
      let {field} = action.payload;
      return Object.assign({}, state, {[field]: ''});


    default:
      return state;
  }
}

export default combineReducers({fields, errors});

