import view from './view'
import {connect} from 'react-redux'
import actions from 'app/profile/current/actions'
import notificationActions from 'app/notifications/actions'


const mapStateToProps = (state) => ({
  currentUser: state.profile.current.data,
  notifications: {
    data: state.notifications.data.filter(n => n.status == 'new'),
    status: state.notifications.status
  }
});


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },

    getNotifications: (page, user) => (
      dispatch(notificationActions.fetch(page, user))
    ),

    read: (notificationID) => (
      dispatch(notificationActions.read(notificationID))
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
