import React from 'react'
import {Component} from 'react'
import Loader from 'app/core/components/loader'


class TaskItem extends Component {
  componentDidMount () {
    const {id} = this.props.params;
    this.props.fetch(id);
  }

  componentWillUnmount () {
    this.props.reset();
  }

  render () {
    console.log(this.props);
    if (!this.props.task.status.loaded) {
      return <Loader hidden={false}/>
    }

    return (
      <div className="task-item">
        task item
      </div>
    );
  }
}

export default TaskItem
