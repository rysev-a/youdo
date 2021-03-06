import constants from 'app/constants';
import requestAction from 'app/core/helpers/request-action';
import api from '../api'


export default {
  update: (field, value)=> ({
    type: constants.UPDATE_OFFER_CREATE,
    payload: {field, value}
  }),

  submit: function (task) {
    return requestAction(api.add(task), {
      request: constants.SUBMIT_OFFER_CREATE,
      success: constants.SUBMIT_OFFER_CREATE_SUCCESS,
      error: constants.SUBMIT_OFFER_CREATE_ERROR
    });
  },

  init: (offer)=> ({
    type: constants.INIT_OFFER_CREATE,
    payload: offer
  }),

  reset: ()=> ({type: constants.RESET_OFFER_CREATE}),

  open: ()=> ({type: constants.OPEN_OFFER_CREATE}),

  close: ()=> ({type: constants.CLOSE_OFFER_CREATE})
}
