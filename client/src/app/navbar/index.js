import view from './view'
import {connect} from 'react-redux'
import actions from 'app/profile/current/actions'


const mapStateToProps = (state) => {
  return {currentUser: state.profile.current.data}
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
