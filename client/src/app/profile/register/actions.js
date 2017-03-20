import {push} from 'react-router-redux';
import constants from 'app/bootstrap/constants';
import requestAction from 'app/core/helpers/request-action';
import api from '../api';


let actions = {
  update: (field, value) => {return {
    type: constants.UPDATE_REGISTER_FORM,
    payload: {field, value}
  }},

  reset: ()=> {
    return {
      type: constants.RESET_REGISTER_FORM
    }
  },

  submit: function (data) {
    return requestAction(api.register(data), {
      request: constants.SUBMIT_REGISTER_FORM,
      success: constants.SUBMIT_REGISTER_FORM_SUCCESS,
      error: constants.SUBMIT_REGISTER_FORM_ERROR,
      complete: push('/')
    });
  }
}

export default actions
