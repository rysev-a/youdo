import React from 'react';
import {Component} from 'react';
import FormTemplate from '../components/form-template';
import FormItem from '../components/form-item';



class LoginView extends FormTemplate {
  render() {
    return (
      <div className="container">
        <div className={this.formCss('card login-card')}>
          <div className="card-header">
            <div className="card-title">Введите данные</div>
          </div>
          <div className="card-content">
            <FormItem placeholder='Электронная почта'
                      error={this.getError('email')}
                      icon='email'
                      onChange={this.update.bind(this, 'email')}
                      type='email'/>

            <FormItem placeholder='Пароль'
                      error={this.getError('password')}
                      icon='lock_outline'
                      onChange={this.update.bind(this, 'password')}
                      type='password'/>                      
            <div className="form-buttons">
              <a className="login-form__submit button"
                 onClick={this.submit.bind(this)}>Войти</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView
