import {push} from 'react-router-redux';
import requestAction from 'app/core/helpers/request-action';
import constants from 'app/bootstrap/constants';
import api from '../api';


let actions = {
  update: (field, value) => {return {
    type: constants.UPDATE_PROFILE_FORM,
    payload: {field, value}
  }},

  reset: () => {
    return {
      type: constants.RESET_PROFILE_FORM
    }
  },

  init: (data)=> {
    return {
      type: constants.INIT_PROFILE_FORM,
      payload: data
    }
  },

  submit: (data)=> {
    return requestAction(api.edit(data), {
      request: constants.SUBMIT_PROFILE_FORM,
      success: constants.SUBMIT_PROFILE_FORM_SUCCESS,
      error: constants.SUBMIT_PROFILE_FORM_ERROR,
      complete: push('/')
    });
  }
}

export default actions;
