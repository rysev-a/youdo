import {connect} from 'react-redux'
import view from './view'
import actions from './actions'


const mapStateToProps = (state)=> ({task: state.tasks.item});

const mapDispatchToProps = (dispatch)=> {
  return {
    fetch: (id)=> dispatch(actions.fetch(id)),
    reset: ()=> dispatch(actions.reset())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
