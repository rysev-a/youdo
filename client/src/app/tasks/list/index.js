import {connect} from 'react-redux';
import view from './view';
import actions from './actions';


let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.list
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(actions.fetch(page))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
