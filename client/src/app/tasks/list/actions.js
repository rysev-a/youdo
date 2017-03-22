import constants from 'app/constants';
import api from '../api';


let actions = { 
  fetch: (page)=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_TASK_LIST});
      api.list(page)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_TASK_LIST_SUCCESS,
            payload: json
          });
        })
    }
  }
}


export default actions
