import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';


class TaskList extends Component {
  componentDidMount() {
    this.props.fetch(1);
  }

  render () {
    return (
      <div className="task-list">
        <div className="container">
          <h2>Задачи</h2>
          <div className="row">
            <div className="col-md-3">
              <Filter {...this.props}/>
            </div>
            <div className="col-md-9">
              <List {...this.props.tasks}/>
              <Pagination status={this.props.tasks.status}
                          fetch={this.props.fetch}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div className="task-list__filter">

        <div className="filter-item filter-sort">
          <div className="filter-item">
            Сортировать по:
            <select className="form-control">
              <option>Дате</option>
              <option>Рейтингу</option>
              <option>Цене</option>
            </select>
          </div>

          <div className="radio">
            <label>
              <input type="radio" name="optionsRadios"/>
              <span className="circle"></span>
              <span className="check"></span>
              Возрастанию
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="optionsRadios"/>
              <span className="circle"></span>
              <span className="check"></span>
              Убыванию
            </label>
          </div>
        </div>
      </div>
    );
  }
}

class List extends Component {
  render () {
    if (this.props.status.loaded) {
      return (
        <div className="task-list__content">
          {this.props.data.map((task)=> 
            <TaskItem key={task.id} {...task} />
          )}
        </div>
      );     
    }

    return <div>...loading</div>;
  }
}

class TaskItem extends Component {
  render () {
    let task = this.props;
    return (
      <div className="task-list__item" key={task.id}>
        <a className="task-list__item-title">{task.name}</a>
        <div className="task-list__item-description">{task.description}</div>

        <div className="task-list__item-info">
          <span className="view-count task-list__item-info__item">
            <span className="view-count__title">Просмотров: </span>
            <span className="view-count__value">8</span>
          </span>
          <span className="offer-count task-list__item-info__item">
            <span className="offer-count__title">Откликов: </span>
            <span className="offer-count__value">8</span>
          </span>
        </div>
      </div>
    );
  }
}

class Pagination extends Component {
  render () {
    let {loaded, page, page_count} = this.props.status;

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
      this.fetch(page);
    }
  }

  goPrev () {
    let page = this.props.status.page - 1;

    if (page > 0) {
      this.fetch(page);
    }
  }

  fetch (page) {
    this.props.fetch(page);
    let timerID = setInterval(()=> {
        window.scrollBy(0, -10);
        if( window.pageYOffset <= 80 )
            clearInterval(timerID);
    }, 10);
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
              onClick={()=> (this.fetch(page))}>{page}</a>;
  }
}

export default TaskList
