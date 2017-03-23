import {browserHistory} from 'react-router';
import constants from 'app/constants';
import requestAction from 'app/core/helpers/request-action';
import api from '../api'


export default {
  reset: ()=> {
    return {
      type: constants.RESET_TASK_CREATE
    };
  },

  update: (field, value)=> {
    return {
      type: constants.UPDATE_TASK_CREATE,
      payload: {field, value}
    };
  },

  submit: function (task) {
    return requestAction(api.add(task), {
      request: constants.SUBMIT_TASK_CREATE,
      success: constants.SUBMIT_TASK_CREATE_SUCCESS,
      error: constants.SUBMIT_TASK_CREATE_ERROR
    }, ()=> browserHistory.push('/'));
  }
}
