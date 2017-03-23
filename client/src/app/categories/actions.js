import constants from 'app/constants';
import api from './api';


let actions = {
  fetch: ()=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_TASK_CATEGORY_LIST});
      api.list()
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_TASK_CATEGORY_LIST_SUCCESS,
            payload: json
          });
        })
    }
  }
};


export default actions
