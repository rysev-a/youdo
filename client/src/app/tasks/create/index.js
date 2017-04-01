import {bindActionCreators} from 'redux'
import {connectAdvanced} from 'react-redux'
import createActions from './actions'
import categoryActions from 'app/categories/actions'
import view from './view'
import shallowEqual from 'shallowequal'


function selectorFactory(dispatch) {
  let state = {};
  let ownProps = {};
  let result = {};
  const actions = bindActionCreators({
    ...createActions,
    ...categoryActions,
  }, dispatch);

  const submit = (task) => actions.submit({
    ...task,
    customer_id: state.profile.current.data.id
  });

  return (nextState, nextOwnProps) => {
    const categories = nextState.categories;
    const create = nextState.tasks.create;
    const nextResult = {...nextOwnProps, categories, create, ...actions, submit};


    state = nextState;
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) result = nextResult;
    return result
  }
}

export default connectAdvanced(selectorFactory)(view)
