import {connect} from 'react-redux';
import actions from './actions';
import view from './view';


let mapStateToProps = (state) => {
  return {
    formData: state.profile.edit,
    status: state.profile.current.status,
    defaultData: state.profile.current.data
  };
};

let mapDispatchToProps = (dispatch)=> {
  return {
    update: (field, value)=> {
      dispatch(actions.update(field, value));
    },
    submit: (formData)=> {
      dispatch(actions.submit(formData));
    },
    reset: ()=> {
      dispatch(actions.reset());
    },
    init: (data)=> {
      dispatch(actions.init(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(view)
