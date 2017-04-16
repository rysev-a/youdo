import constants from 'app/constants'
import {combineReducers} from 'redux'


const defaultDialogState = ()=> ({
  price: 0,
  message: 'Текст сообщения'
});

function dialog(state=defaultDialogState(), action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
    case constants.SUBMIT_OFFER_CREATE_SUCCESS:
    case constants.ACCEPT_OFFER_DIALOG_SUCCESS:
       return Object.assign({}, state, {
        price: action.payload.price
      });

    case constants.CONFIRM_OFFER_DIALOG_SUCCESS:
    case constants.COMPLETE_OFFER_DIALOG_SUCCESS:
      return defaultDialogState();

    case constants.UPDATE_OFFER_DIALOG:
      let {field, value} = action.payload;
      return Object.assign({}, state, {[field]: value});


    default:
      return state;
  }
}

function status (state={isOpen: false}, action) {
  switch (action.type) {
    case constants.OPEN_OFFER_DIALOG:
      return Object.assign({}, state, {isOpen: true});

    case constants.CLOSE_OFFER_DIALOG:
      return Object.assign({}, state, {isOpen: false});

    default:
      return state;
  }
}

function data(state={}, action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
    case constants.SUBMIT_OFFER_CREATE_SUCCESS:
    case constants.ACCEPT_OFFER_DIALOG_SUCCESS:
    case constants.CONFIRM_OFFER_DIALOG_SUCCESS:
    case constants.COMPLETE_OFFER_DIALOG_SUCCESS:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}


function offerReducer (state={}, action) {
  switch (action.type) {
    case constants.OPEN_OFFER_DIALOG:
    case constants.CLOSE_OFFER_DIALOG:
    case constants.UPDATE_OFFER_DIALOG:
      if (state.data.id != action.payload.data.id) {
        return state;
      }

      return combineReducers({data, status, dialog})(state, action);

    case constants.ACCEPT_OFFER_DIALOG_SUCCESS:
    case constants.CONFIRM_OFFER_DIALOG_SUCCESS:
    case constants.COMPLETE_OFFER_DIALOG_SUCCESS:
      if (state.data.id != action.payload.id) {
        return state;
      }

      return combineReducers({data, status, dialog})(state, action);

    case constants.FETCH_OFFER_LIST_SUCCESS:
    case constants.SUBMIT_OFFER_CREATE_SUCCESS:
      return combineReducers({data, status, dialog})({}, action);


    default:
      return state;
  }
}

export default offerReducer
