import constants from 'app/constants';
import api from '../api';


let actions = { 
  fetch: (taskID)=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_OFFER_LIST});
      api.list(taskID)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_OFFER_LIST_SUCCESS,
            payload: json
          });
        })
    }
  }
};

export default actions
