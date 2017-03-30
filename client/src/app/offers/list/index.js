import {connect} from 'react-redux'
import view from './view'
import actions from './actions'


const mapStateToProps = (state) => {
  return {
    offers: state.offers.list,
    task: state.tasks.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (taskID) => dispatch(actions.fetch(taskID))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
