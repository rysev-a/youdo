import {connect} from 'react-redux'
import actions from './actions'
import view from './view'


const mapStateToProps = (state)=> {
  return {
    offer: state.offers.create,
    profile: state.profile.current
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    init: (offer)=> dispatch(actions.init(offer)),
    reset: ()=> dispatch(actions.reset()),
    update: (field, value)=> dispatch(actions.update(field, value)),
    submit: (offer)=> dispatch(actions.submit(offer)),
    open: ()=> dispatch(actions.open()),
    close: ()=> dispatch(actions.close())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
