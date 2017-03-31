import constants from 'app/constants'
import {combineReducers} from 'redux'


const defaultDialogState = ()=> ({
  price: 0,
  message: 'Готов выполнить вашу задачу, буду рад сотрудничать'
});

function dialog(state=defaultDialogState(), action) {
  switch (action.type) {
    case constants.FETCH_OFFER_LIST_SUCCESS:
      return Object.assign({}, state, {
        price: action.payload.price
      });

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

    case constants.FETCH_OFFER_LIST_SUCCESS:
      return combineReducers({data, status, dialog})({}, action);


    default:
      return state;
  }
}

export default offerReducer
