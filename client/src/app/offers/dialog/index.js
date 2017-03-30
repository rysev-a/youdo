import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import actions from './actions'
import view from './view'


const mapStateToProps = (state) => {
  return {
    offers: state.offers.list,
    dialog: state.offers.dialog
  };
};

const mapDispatchToProps = (dispatch)=> (
  bindActionCreators(actions, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(view)
