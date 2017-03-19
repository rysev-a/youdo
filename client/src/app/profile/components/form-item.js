import classNames from 'classnames';
import React from 'react';
import {Component} from 'react';


class FormItem extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      this.textInput.focus();
    }
  }

  render () {
    let {type, placeholder, onChange, error, icon, autoFocus} = this.props;
    return (
      <div className={classNames({'form-item': true, 'error': error})}>
        <span className="form-item__icon">
          <i className="material-icons">{icon}</i>
        </span>
        <div className="form-error">{error}</div>
        <input className={classNames({'form-control': true, 'error': error})}
               ref={input=> {this.textInput = input;}}
               type={type} placeholder={placeholder}
               onChange={onChange}/>
      </div>
    );
  }
}

export default FormItem
