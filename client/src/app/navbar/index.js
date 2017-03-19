import view from './view';
import {connect} from 'react-redux';
import actions from 'app/profile/current/actions';


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
