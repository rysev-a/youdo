import React, {Component} from 'react'
import settings from 'app/settings'
import Loader from 'app/core/components/loader'
import TaskListView from 'app/tasks/list/view'


class TaskListAuthorizationWrapper extends Component {
  componentWillUnmount () {
    this.props.reset();
  }

  render () {
    if (this.props.currentUser.status.loaded) {
      return <TaskList {...this.props}/>
    }
    return <Loader processing={true} />
  }
}

class TaskList extends TaskListView {
  componentDidMount () {
    this.updateFilters();
    this.props.fetch();
  }

  componentDidUpdate (prev) {
    // on url param changes update filter
    if (prev.params.type !== this.props.params.type) {
      this.updateFilters();
    }

    // on filter, pagination, sort change update tasks
    super.componentDidUpdate(prev);
  }

  updateFilters () {
    const paramMap = {
      executed: {executor_id: this.props.currentUser.data.id},
      created: {customer_id: this.props.currentUser.data.id}
    };

    this.props.filter(paramMap[this.props.params.type]);
    this.props.updateFilter({statuses: settings.STATUSES});
  }
}

export default TaskListAuthorizationWrapper
