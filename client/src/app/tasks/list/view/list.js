import Moment from 'moment'
import React from 'react'
import {Link} from 'react-router'
import Loader from 'app/core/components/loader'


const taskItem = (task)=>
  <Link className="task-list__item"
        to={`/tasks/${task.id}`}
        key={task.id}>
    <div className="task-list__item-title">{task.name} {task.price} Р</div>
    <div className="task-list__item-description">{task.description}</div>
    <div className="task-list__item-info">
      <span className="create-datetime">{
        Moment(task.create_datetime).format('YYYY.MM.DD HH:mm:ss')
      }</span>
      <span className="view-count task-list__item-info__item">
        <span className="view-count__title">Просмотров: </span>
        <span className="view-count__value">8</span>
      </span>
      <span className="offer-count task-list__item-info__item">
        <span className="offer-count__title">Откликов: </span>
        <span className="offer-count__value">82</span>
      </span>
    </div>
  </Link>;

export default (tasks)=>
  <div className="task-list__content">
    <Loader processing={tasks.status.processing} />
    {tasks.data.map(taskItem)}
  </div>

