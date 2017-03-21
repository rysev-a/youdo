import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';
import {getErrorText} from 'app/core/helpers/localization';


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

  componentWillUnmount() {
    this.props.reset();
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

  submit() {
    this.props.submit(this.props.formData.fields);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
     this.submit();
    }
  }
}

export default FormTemplate

