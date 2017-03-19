import constants from 'app/bootstrap/constants';

let anonymous = ()=> {
  return {
    loading: false,
    is_authenticated: false
  }
}

function current(state = anonymous(), action) {
  
  switch(action.type) {
    case constants.LOGOUT_CURRENT_USER_SUCCESS:
      return anonymous();

    case constants.SUBMIT_LOGIN_FORM_SUCCESS:
    case constants.SUBMIT_REGISTRATION_FORM_SUCCESS:
    case constants.SUBMIT_PROFILE_FORM_SUCCESS:
    case constants.FETCH_CURRENT_USER_SUCCESS:
      return Object.assign(action.payload, {loading: false});

    default:
      return state;
  }
}

export default current
