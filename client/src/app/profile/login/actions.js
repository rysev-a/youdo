import {browserHistory} from 'react-router-dom';
import constants from 'app/bootstrap/constants';
import api from '../api';


let actions = {
  update: (field, value) => {return {
    type: constants.UPDATE_LOGIN_FORM,
    payload: {field, value}
  }},

  submit: function (data) {
    let successCallback = this.submitSuccess;
    let errorCallback = this.submitError;

    return (dispatch)=> {
      dispatch({type: constants.SUBMIT_LOGIN_FORM});
      api.login(data)
        .then((response)=> {
          if (response.ok) {
            this.success(dispatch, response);
          }
          else {
            this.error(dispatch, response);
          }
        });
    }
  },

  success: (dispatch, response) => {
    response.json().then((json)=>
      dispatch({               
        type: constants.SUBMIT_LOGIN_FORM_SUCCESS,
        payload: json
      })
    );
  },

  error: (dispatch, response) => {
    response.json().then((json)=>
      dispatch({               
        type: constants.SUBMIT_LOGIN_FORM_ERROR,
        payload: json
      })
    );
  }
}

export default actions;
