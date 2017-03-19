import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import {getErrorText} from 'app/core/localization';


class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'visible': false
    }
  }

  componentDidMount() {
    setTimeout(()=> this.setState({'visible': true}), 100);
  }

  formControlCss (field) {
    let className = 'form-control';

    if (this.props.formData.errors[field]) {
      className = `${className} error`;
    }

    return className;
  }

  getError (field) {
    return getErrorText(this.props.formData.errors[field]);
  }


  render() {
    let formCssClass = this.state.visible ? 'card login-card' : 
                                       'card login-card hidden';
    return (
      <div className="container">
        <div className={formCssClass}>
          <div className="card-header">
            <div className="card-title">Введите данные</div>
          </div>
          <div className="card-content">
            <FormItem placeholder='Электронная почта'
                      error={this.getError('email')}
                      icon='email'
                      onChange={this.update.bind(this, 'email')}
                      type='email'/>

            <FormItem placeholder='Имя'
                      error={this.getError('first_name')}
                      icon='face'
                      onChange={this.update.bind(this, 'first_name')}
                      type='text'/>

            <FormItem placeholder='Пароль'
                      error={this.getError('password')}
                      icon='lock_outline'
                      onChange={this.update.bind(this, 'password')}
                      type='password'/>

            <div className="form-buttons">
              <a className="login-form__submit button"
                 onClick={this.submit.bind(this)}>Зарегистрироваться</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  update(field, e) {
    this.props.update(field, e.target.value);
  }

  submit(profile) {
    this.props.submit(this.props.formData.fields);
  }
}


class FormItem extends Component {
  render () {
    let {type, placeholder, onChange, error, icon} = this.props;
    return (
      <div className={classNames({'form-item': true, 'error': error})}>
        <span className="form-item__icon">
          <i className="material-icons">{icon}</i>
        </span>
        <div className="form-error">{error}</div>
        <input className={classNames({'form-control': true, 'error': error})}
               type={type} placeholder={placeholder}
               onChange={onChange}/>
      </div>
    );
  }
}


export default RegisterView

