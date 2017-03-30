import React from 'react'
import {Component} from 'react'
import classNames from 'classnames'


class OfferDialog extends Component {
  render () {
    return (
      <div className="offer-dialog">
        <Form {...this.props} />
        <Buttons {...this.props} />
      </div>
    );
  }
}


class Form extends Component {
  render () {
    let className = classNames({
      'offer-dialog__form': true,
      'is-open': this.props.dialog.status.isOpen
    });

    return (
      <div className={className}>
        <div className="form-item">
          <input type="number"
                 className="form-control"
                 onChange={this.update.bind(this, 'price')}
                 value={this.props.dialog.data.price}/>
          <label className="form-label">Окончательная цена</label>
        </div>
        <div className="form-item">
          <textarea value={this.props.dialog.data.message}
                    onChange={this.update.bind(this, 'message')}
                    className="form-control"/>
          <label className="form-label">Введите сообщение</label>
        </div>
      </div>
    );
  }

  update (field, e) {
    this.props.update(field, e.target.value);
  }
}

class Buttons extends Component {
  render () {
    if (this.props.dialog.status.isOpen) {
      return (
        <div className="form-buttons">
          <a className="button button-success"
             onClick={this.submit.bind(this)}>Отправить</a>
          <a className="button button-primary"
             onClick={this.props.close}>Отмена</a>
        </div>
      )
    }

    return (
      <div className="form-buttons">
        <a className="button button-primary"
           onClick={this.props.open}>Принять предложение</a>
      </div>
    );
  }

  submit () {
    this.props.submit({});
  }
}

export default OfferDialog
