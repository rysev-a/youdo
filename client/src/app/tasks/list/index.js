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
    page: state.tasks.list.pagination.page,
    sort: state.tasks.list.sort,
    filter: state.tasks.list.filter
  });

  return (nextState, nextOwnProps) => {
    const tasks = nextState.tasks.list;
    const nextResult = {...nextOwnProps, tasks, ...taskListActions, fetch};

    state = nextState;
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) result = nextResult;
    return result
  }
}

export default connectAdvanced(selectorFactory)(view)
