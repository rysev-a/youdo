import constants from 'app/constants';


function categories (state=[], action) {
  switch (action.type) {
    case constants.FETCH_TASK_CATEGORY_LIST_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

export default categories
