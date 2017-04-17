import constants from 'app/constants'
import api from './api'


export default {
  fetch: ({page, sort, filter})=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_PROFILE_TASK_LIST});
      api.list(page, sort, filter)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_PROFILE_TASK_LIST_SUCCESS,
            payload: json
          });
        })
    }
  },

  sort: (params)=> ({
    type: constants.UPDATE_PROFILE_TASK_LIST_SORT,
    payload: params
  }),

  filter: (params)=> ({
    type: constants.SET_PROFILE_TASK_LIST_FILTER,
    payload: params
  }),

  pagination: (params)=> ({
    type: constants.UPDATE_PROFILE_TASK_LIST_PAGINATION,
    payload: params
  })
}