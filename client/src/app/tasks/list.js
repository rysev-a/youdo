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
