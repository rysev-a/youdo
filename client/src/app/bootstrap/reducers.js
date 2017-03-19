import {combineReducers} from 'redux';
import constants from './constants';
import profile from 'app/profile/reducers';


let defaultState = ()=> {
  return {
    processing: true,
    initialized: false
  }
};

function app (state = defaultState(), action) {
  switch (action.type) {
    case constants.INIT_APP:
      return Object.assign({}, state, {processing: false, initialized: true});

    default:
      return state;
  }
}


export default combineReducers({app, profile})
