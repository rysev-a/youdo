import constants from 'app/constants'
import api from '../api'


export default {
  fetch: (page, sort={})=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_TASK_LIST});
      api.list(page, sort)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_TASK_LIST_SUCCESS,
            payload: json
          });
        })
    }
  },

  sort: (params)=> {
    return (dispatch)=> {
      dispatch({
        type: constants.UPDATE_TASK_LIST_SORT,
        payload: params
      });
    }
  }
}
