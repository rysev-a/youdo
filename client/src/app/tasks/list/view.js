import Moment from 'moment'
import classNames from 'classnames'
import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router'
import Loader from 'app/core/components/loader'


class TaskList extends Component {
  componentDidMount() {
    this.props.fetch(1);
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
                  <Sort {...this.props}/>
                </div>
                <div className="col-md-9">
                  <List {...this.props.tasks}/>
                  <Pagination status={this.props.tasks.status}
                              sort={this.props.tasks.sort}
                              fetch={this.props.fetch}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Sort extends Component {
  render () {
    return (
      <div className="task-list__filter">
        <div className="filter-item filter-sort">
          <div className="filter-item">
            Сортировать по:
            <select className="form-control"
              onChange={this.sort('type')}
              value={this.props.tasks.sort.type}>
              <option value="create_datetime">Дате</option>
              <option value="price">Цене</option>
            </select>
          </div>

          <div className="radio">
            <label>
              <input type="radio"
                     value="asc"
                     onChange={this.sort('order')}
                     name="optionsRadios"/>
              <span className="circle"/>
              <span className="check"/>
              Возрастанию
            </label>
          </div>
          <div className="radio">
            <label>
              <input value="desc"
                     type="radio"
                     onChange={this.sort('order')}
                     name="optionsRadios"/>
              <span className="circle"/>
              <span className="check"/>
              Убыванию
            </label>
          </div>
        </div>
      </div>
    );
  }

  sort (field) {
    return (e)=> {
      this.props.sort({[field]: e.target.value});
      this.props.fetch(
        this.props.tasks.status.page,
        Object.assign({}, this.props.tasks.sort, {[field]: e.target.value})
      );
    };
  }
}

class List extends Component {
  render () {
    return (
      <div className="task-list__content">
        <Loader hidden={!this.props.status.processing} />
        {this.props.data.map((task)=>
          <TaskItem key={task.id} {...task} />
        )}
      </div>
    );
  }
}

class TaskItem extends Component {
  render () {
    let task = this.props;
    return (
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
            <span className="offer-count__value">8</span>
          </span>
        </div>
      </Link>
    );
  }
}

class Pagination extends Component {
  render () {
    let {loaded, page, page_count} = this.props.status;

    if (page_count < 2) {
      return <div className="task-list__pagination"></div>;
    }

    return (
      <div className="task-list__pagination">
        <a className="task-list__pagination__item prev"
           onClick={this.goPrev.bind(this)}>Назад</a>
        {[...Array(page_count).keys()].map(this.pageLink.bind(this))}
        <a className="task-list__pagination__item next"
           onClick={this.goNext.bind(this)}>Вперед</a>
      </div>
    );
  }

  goNext () {
    let page = this.props.status.page + 1;
    if (page <= this.props.status.page_count) {
      this.props.fetch(page, this.props.sort);
    }
  }

  goPrev () {
    let page = this.props.status.page - 1;

    if (page > 0) {
      this.props.fetch(page, this.props.sort);
    }
  }

  getCssClass (page) {
    return classNames({
      'task-list__pagination__item': true,
      'active': this.props.status.page === page
    })
  }

  pageLink (page) {
    page++;
    return <a key={page}
              className={this.getCssClass(page)}
              onClick={()=> (this.props.fetch(page, this.props.sort))}>{page}</a>;
  }
}

export default TaskList
