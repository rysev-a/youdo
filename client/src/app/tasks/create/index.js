import {connect} from 'react-redux';
import actions from './actions';
import categoryActions from 'app/categories/actions';
import view from './view';


const mapStateToProps = (state)=> {
  return {
    create: state.tasks.create,
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    update: (field, value)=> dispatch(actions.update(field, value)),
    reset: ()=> dispatch(actions.reset()),
    submit: (task)=> dispatch(actions.submit(task)),
    fetchCategories: ()=> dispatch(categoryActions.fetch())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(view)
