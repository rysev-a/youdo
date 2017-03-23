import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';


class FormItem extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      this.textInput.focus();
    }
  }

  formIcon () {
    if (this.props.icon) {
      return (
        <span className="form-item__icon">
          <i className="material-icons">{this.props.icon}</i>
        </span>
      );
    }
  }

  render () {
    let {type, placeholder, onChange, error, autoFocus, defaultValue} = this.props;
    return (
      <div className={classNames({'form-item': true, 'is-error': error})}>
        {this.formIcon()}
        <div className="form-error">{error}</div>
        <input className={classNames({'form-control': true, 'error': error})}
               ref={input=> {this.textInput = input;}}
               defaultValue={defaultValue}
               type={type} placeholder={placeholder}
               onChange={onChange}/>
      </div>
    );
  }
}

export default FormItem
