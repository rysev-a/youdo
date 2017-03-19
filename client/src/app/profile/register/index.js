import {connect} from 'react-redux';
import actions from './actions';
import view from './view';


let mapStateToProps = (state) => {
  return {
    formData: state.profile.register
  };
};

let mapDispatchToProps = (dispatch)=> {
  return {
    update: (field, value)=> {
      dispatch(actions.update(field, value));
    },
    submit: (formData)=> {
      dispatch(actions.submit(formData));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
