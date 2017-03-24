import constants from 'app/constants';
import api from '../api';
import requestAction from 'app/core/helpers/request-action';


export default {
  fetch: (id)=> {
    return requestAction(api.item(id), {
      request: constants.FETCH_TASK_ITEM,
      success: constants.FETCH_TASK_ITEM_SUCCESS,
      error: constants.FETCH_TASK_ITEM_ERROR
    })
  },

  reset: ()=> ({type: constants.RESET_TASK_ITEM})
}
