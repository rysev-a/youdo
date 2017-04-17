import {bindActionCreators} from 'redux'
import {connectAdvanced} from 'react-redux'
import actions from './actions'
import view from './view'
import shallowEqual from 'shallowequal'


function selectorFactory(dispatch) {
  let state = {};
  let ownProps = {};
  let result = {};

  const taskListActions = bindActionCreators(actions, dispatch);
  const fetch = () => taskListActions.fetch({
    page: state.profile.tasks.pagination.page,
    sort: state.profile.tasks.sort,
    filter: state.profile.tasks.filter
  });

  return (nextState, nextOwnProps) => {
    const tasks = nextState.profile.tasks;
    const currentUser = nextState.profile.current;
    const nextResult = {...nextOwnProps, tasks, currentUser, ...taskListActions, fetch};

    state = nextState;
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) result = nextResult;
    return result
  }
}

export default connectAdvanced(selectorFactory)(view)
