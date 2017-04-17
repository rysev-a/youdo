import React, {Component} from 'react'
import List from './list'
import Sort from './sort'
import Pagination from './pagination'


class TaskList extends Component {
  componentDidMount () {
    this.props.fetch();
  }

  componentDidUpdate (prev) {
    if (
      prev.tasks.filter != this.props.tasks.filter ||
      prev.tasks.pagination.page != this.props.tasks.pagination.page ||
      prev.tasks.sort != this.props.tasks.sort
    ) {
      this.props.fetch();
      window.scrollTo(0, 0);
    }
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

export default TaskList
