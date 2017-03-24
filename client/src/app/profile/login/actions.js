import {browserHistory} from 'react-router'
import constants from 'app/constants'
import requestAction from 'app/core/helpers/request-action'
import api from '../api'


let actions = {
  update: (field, value) => {return {
    type: constants.UPDATE_LOGIN_FORM,
    payload: {field, value}
  }},

  reset: () => {
    return {
      type: constants.RESET_LOGIN_FORM
    }
  },

  submit: function (data) {
    return requestAction(api.login(data), {
      request: constants.SUBMIT_LOGIN_FORM,
      success: constants.SUBMIT_LOGIN_FORM_SUCCESS,
      error: constants.SUBMIT_LOGIN_FORM_ERROR,
    }, ()=> browserHistory.push('/'));
  }
};

export default actions;
