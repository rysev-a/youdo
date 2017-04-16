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

  accept: (offer, customer)=> {
    return (dispatch)=> {
      api.accept(offer.data.id, {
        message: {
          offer_id: offer.data.id,
          sender_id: customer.data.id,
          content: offer.dialog.message
        },
        price: offer.dialog.price
      })
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.ACCEPT_OFFER_DIALOG_SUCCESS,
            payload: json
          });
        })

    }
  },

  confirm: (offer, executor)=> {
    return (dispatch)=> {
      api.confirm(offer.data.id, {
        message: {
          offer_id: offer.data.id,
          sender_id: executor.data.id,
          content: offer.dialog.message
        }
      })
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.CONFIRM_OFFER_DIALOG_SUCCESS,
            payload: json
          });
          dispatch({
            type: constants.CLOSE_OFFER_DIALOG,
            payload: offer
          });
        })
    }
  },

  complete: (offer, executor)=> {
    return (dispatch)=> {
      api.complete(offer.data.id, {
        message: {
          offer_id: offer.data.id,
          sender_id: executor.data.id,
          content: offer.dialog.message
        }
      })
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: constants.COMPLETE_OFFER_DIALOG_SUCCESS,
            payload: json
          });
          dispatch({
            type: constants.CLOSE_OFFER_DIALOG,
            payload: offer
          });
        })
    }
  }

}
