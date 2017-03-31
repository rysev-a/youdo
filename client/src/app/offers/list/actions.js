import constants from 'app/constants';
import api from '../api';


export default {
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
  },

  update: (offer, field, value)=> ({
    type: constants.UPDATE_OFFER_DIALOG,
    payload: {data: offer.data, field, value}
  }),

  open: (offer)=> ({
    type: constants.OPEN_OFFER_DIALOG,
    payload: offer
  }),

  close: (offer)=> ({
    type: constants.CLOSE_OFFER_DIALOG,
    payload: offer
  }),

  submit: (offer)=> ((dispatch)=> {
    console.log(offer);
  })
}
