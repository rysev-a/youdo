import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';


class TaskCreate extends Component {
  render () {
    return (
      <div className="container">
        <h2>Создать задачу</h2>
        <div className="task-create card">
          <div className="card-content">
            <div className={this.isEmpty('name')}>
              <input type="text" className="form-control"
                     onChange={this.update.bind(this, 'name')}  />
              <label className="form-label">Название </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  update (field, e) {
    this.props.update(field, e.target.value);
  }

  isEmpty (field) {
    return classNames({
      'form-item': true,
      'is-empty': !this.props.create.data[field]
    });
  }
}


export default TaskCreate
