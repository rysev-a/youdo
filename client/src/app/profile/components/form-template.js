import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import {getErrorText} from 'app/core/helpers/localization';
import FormItem from '../components/form-item';


class FormTemplate extends Component {
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

  formCss(customCssClass) {
     return this.state.visible ? customCssClass : 
                                 `${customCssClass} hidden`;
  }

  getError (field) {
    return getErrorText(this.props.formData.errors[field]);
  }

  update(field, e) {
    this.props.update(field, e.target.value);
  }

  submit(profile) {
    this.props.submit(this.props.formData.fields);
  }
}

export default FormTemplate

