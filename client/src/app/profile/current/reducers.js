import constants from 'app/bootstrap/constants';

let defaultState = ()=> {
  return {
    is_authenticated: false
  }
}

function current(state=defaultState(), action) {
    switch(action.type) {
    case constants.LOGOUT_CURRENT_USER_SUCCESS:
      return defaultState();

    case constants.SUBMIT_LOGIN_FORM_SUCCESS:
    case constants.SUBMIT_REGISTER_FORM_SUCCESS:
    case constants.SUBMIT_PROFILE_FORM_SUCCESS:
    case constants.FETCH_CURRENT_USER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

export default current
