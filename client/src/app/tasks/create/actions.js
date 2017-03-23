import constants from 'app/constants';


export default {
  reset: ()=> {
    return {
      type: constants.RESET_TASK_CREATE
    };
  },

  update: (field, value)=> {
    return {
      type: constants.UPDATE_TASK_CREATE,
      payload: {field, value}
    };
  }
}
