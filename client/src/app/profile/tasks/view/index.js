import React, {Component} from 'react'
import Loader from 'app/core/components/loader'
import List from './list'
import Sort from './sort'
import Pagination from './pagination'


class TaskListAuthorizationWrapper extends Component {
  render () {
    if (this.props.currentUser.status.loaded) {
      return <TaskList {...this.props}/>
    }
    return <Loader processing={true} />
  }
}

class TaskList extends Component {
  componentDidMount () {
    this.updateFilters();
    this.props.fetch();
  }

  componentDidUpdate (prev) {
    // on url param changes update filter
    if (prev.params.type !== this.props.params.type) {
      this.updateFilters();
    }

    //
    if (
      prev.tasks.filter != this.props.tasks.filter ||
      prev.tasks.pagination.page != this.props.tasks.pagination.page ||
      prev.tasks.sort != this.props.tasks.sort
    ) {
      this.props.fetch();
      window.scrollTo(0, 0);
    }
  }

  updateFilters () {
    const paramMap = {
      executed: {executor_id: this.props.currentUser.data.id},
      created: {customer_id: this.props.currentUser.data.id}
    };

    this.props.filter(paramMap[this.props.params.type]);
  }

  render () {
    return (
      <div className="task-list">
        <div className="container">
          <h2>Задачи</h2>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col-md-3">
                  <Sort sort={this.props.tasks.sort}
                        update={this.props.sort}/>
                </div>
                <div className="col-md-9">
                  <List {...this.props.tasks}/>
                  <Pagination pagination={this.props.tasks.pagination}
                              update={this.props.pagination} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskListAuthorizationWrapper
