import {connect} from 'react-redux';
import view from './view';
import actions from './actions';


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(actions.fetch(page))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
