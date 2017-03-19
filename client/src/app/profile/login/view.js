import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';


class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'visible': false
    };
  }

  componentDidMount() {
    setTimeout(()=> this.setState({'visible': true}), 100);
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
            <div className="form-item">
              <span className="form-item__icon">
                <i className="material-icons">email</i>
              </span>
              <input className="form-control"
                     type="email"
                     placeholder="Электронная почта"
                     onChange={this.update.bind(this, 'email')} />
            </div>
            <div className="form-item">
              <span className="form-item__icon">
                <i className="material-icons">lock_outline</i>
              </span>
              <input className="form-control" type="password" placeholder="Пароль" />
            </div>
            <div className="form-buttons">
              <a className="login-form__submit button">Войти на сайт</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  update (field, e) {
    this.props.update(field, e.target.value);
  }
}

export default LoginView
