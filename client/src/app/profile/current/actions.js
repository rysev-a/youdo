import constants from 'app/bootstrap/constants';
import api from '../api';


let actions = {
  fetch: ()=> {
    return (dispatch)=> {
      dispatch({type: constants.FETCH_CURRENT_USER})
      api.current()
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.FETCH_CURRENT_USER_SUCCESS,
            payload: json
          })
        })
    }    
  },

  logout: ()=> {
    return (dispatch)=> {
      dispatch({type: constants.LOGOUT_CURRENT_USER})
      api.logout()
        .then((response) => {
          dispatch({type: constants.LOGOUT_CURRENT_USER_SUCCESS});
        })
    }
  }
}

export default actions;
