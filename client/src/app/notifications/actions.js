import constants from 'app/constants'
import api from './api'


export default {
  fetch: (page, user)=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_NOTIFICATION_LIST});
      api.list(page, user)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_NOTIFICATION_LIST_SUCCESS,
            payload: json
          });
        })
    }
  },

  read: (notificationID)=> {
    return (dispatch)=> {
      api.read(notificationID)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.READ_NOTIFICATION_SUCCESS,
            payload: json
          });
        })
    }
  },
}
