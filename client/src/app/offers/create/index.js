import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import actions from './actions'
import view from './view'

const checkHidden = (profile, task, offers) => {

  // check offers
  if (offers.data.filter(offer =>
    offer.executor.id == profile.data.id).length) {
    return true;
  }

  return (profile.data.id === task.data.customer_id);
};


const mapStateToProps = (state)=> {
  return {
    offer: state.offers.create,
    profile: state.profile.current,
    task: state.tasks.item,
    hidden: checkHidden(
      state.profile.current,
      state.tasks.item,
      state.offers.list
    )
  }
};

const mapDispatchToProps = (dispatch)=> (
  bindActionCreators(actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(view)
