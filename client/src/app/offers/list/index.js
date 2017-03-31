import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import view from './view'
import actions from './actions'


const mapStateToProps = (state) => {
  return {
    offers: state.offers.list,
    task: state.tasks.item,
    currentUser: state.profile.current
  };
};

const mapDispatchToProps = (dispatch)=> (
  bindActionCreators(actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(view)


