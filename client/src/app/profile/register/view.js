import React from 'react';
import {Component} from 'react';
import FormTemplate from '../components/form-template';
import FormItem from '../components/form-item';
import Loader from '../components/loader';


class RegisterView extends FormTemplate {
  render() {
    return (
      <div className="container" onKeyDown={this.onKeyDown.bind(this)}>
        <div className={this.formCss('card register-card')}>
          <div className="card-header">
            <div className="card-title">Введите данные</div>
          </div>
          <div className="card-content">
            <Loader hidden={!this.props.formData.status.loading} />
            <FormItem placeholder='Электронная почта'
                      error={this.getError('email')}
                      autoFocus={true}
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
}

export default RegisterView

