import {connect} from 'react-redux';
import view from './view';
import actions from './actions';


let mapStateToProps = (state) => {
  return {currentUser: state.profile.current}
}

let mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(view)
