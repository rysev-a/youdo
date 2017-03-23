import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';


class TaskCreate extends Component {
  componentDidMount () {
    if (this.props.categories.length === 0) {
      this.props.fetchCategories();
    }
  }

  render () {
    return (
      <div className="container">
        <h2>Создать задачу</h2>
        <div className="task-create card">
          <div className="card-content">
            <div className="row">
              <div className="col-md-6">
                <TaskCreateForm {...this.props}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TaskCreateForm extends Component {
  render () {
    if (this.props.categories.length === 0) {
      return <div>... loading</div>;
    }

    return (
      <div className="task-create__form">
        <div className={this.formItemClassName('name')}>
          <input type="text" className="form-control"
                 onChange={this.update.bind(this, 'name')}  />
          <label className="form-label">Название </label>
        </div>
        <div className={this.formItemClassName('description')}>
          <textarea className="form-control"
                    maxLength="500"
                    onChange={this.update.bind(this, 'description')}>
          </textarea>
          <label className="form-label">Описание</label>
        </div>

        <div className={this.formItemClassName('category_id')}>
          <select className="form-control"
                  defaultValue="0"
                  onChange={this.update.bind(this, 'category_id')}>
            <option disabled="disabled" value="0">Выбрать категорию</option> 
            {this.props.categories.map((category)=> (
              <option value={category.id} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <label className="form-label">Катерогия</label>
        </div>

        <div className={this.formItemClassName('price')}>
          <input type="number" className="form-control"
                 onChange={this.update.bind(this, 'price')}/>
          <label className="form-label">Бюджет в рублях</label>
        </div>

        <div className="form-buttons">
          <a className="button button-success"
             onClick={this.submit.bind(this)}>Создать</a>
        </div>
      </div>
    );
  }

  submit () {
    this.props.submit(this.props.create.data);
  }

  update (field, e) {
    this.props.update(field, e.target.value);
  }

  formItemClassName (field) {
    return classNames({
      'form-item': true,
      'is-empty': !this.props.create.data[field],
      'is-error': this.props.create.errors[field]
    });
  }
}


export default TaskCreate
