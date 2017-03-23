import {connect} from 'react-redux';
import actions from './actions';
import view from './view';


const mapStateToProps = (state)=> {
  return {
    create: state.tasks.create
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    update: (field, value)=> dispatch(actions.update(field, value)),
    reset: ()=> dispatch(actions.reset())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(view)
