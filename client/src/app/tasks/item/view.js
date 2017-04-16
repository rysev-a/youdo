import classNames from 'classnames'
import React from 'react'
import {Component} from 'react'
import Loader from 'app/core/components/loader'
import OfferCreate from 'app/offers/create'
import OfferList from 'app/offers/list'
import {getStatusText} from 'app/core/helpers/localization'


class TaskItemWrapper extends Component {
  componentDidMount () {
    const {id} = this.props.params;
    this.props.fetch(id);
  }

  componentWillUnmount () {
    this.props.reset();
  }

  render () {
    if (!this.props.task.status.loaded) {
      return <Loader processing={true}/>
    }

    return (
      <div className="task-item">
        <TaskItem {...this.props}/>
        <OfferCreate/>
        <OfferList/>
      </div>
    );
  }
}

class TaskItem extends Component {
  render () {
    let {task} = this.props;

    return (
      <div className="container">
        <h2>{task.data.name}</h2>
        <div className="card">
          <div className="card-content">
            <h3>Описание</h3>
            <div className="task-item__description">
              {task.data.description}
            </div>
            <h3>Бюджет</h3>
            <div className="task-item__description">
              {task.data.price}
            </div>
            <h3>Заказчик</h3>
            <div className="task-item__customer">
              {task.data.customer.first_name}
            </div>
            <h3>Статус</h3>
            <div className="task-item__status">
              {getStatusText(task.data.status)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItemWrapper
