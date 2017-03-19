import React from 'react';
import {Component} from 'react';


class AddTask extends Component {
  render() {
    return <div className="container">
      <h2>Добавить задачу</h2>
      <div className="card">
        <div className="card-content">
          Добавить задачу
        </div>
      </div>
    </div>;
  }
}

class Filter extends Component {
  render () {
    return (
      <div className="task-filter">
        <div className="form-item">
          <label>Категория</label>
          <select className="form-control">
            <option>Животные</option>
            <option>Уборка</option>
            <option>Техника</option>
          </select>
        </div>
      </div>
    );
  }
}

class TaskList extends Component {
  render () {
    return (
      <div className="task-list">
        <div className="task-list__content">

        </div>
      </div>
    );
  }
}

class TaskItem extends Component {
  render () {
    return (
      <div className="task-list__item">

      </div>
    );
  }
}

export default AddTask
