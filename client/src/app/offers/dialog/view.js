import React from 'react'
import {Component} from 'react'
import classNames from 'classnames'


class OfferDialog extends Component {
  componentDidMount () {
    this.props.init({price: this.props.offer.price});
  }

  render () {
    let {executor, messages, price} = this.props.offer;
    return (
      <div className="offer-list__item card">
        <div className="card-content">
          <div className="item-title">
            {executor.first_name} готов выполнить
            вашу задачу за {price} рублей
          </div>

          <div className="message-list">
            {messages.map(message =>
              <Message key={message.id} {...message}/>
            )}
          </div>

          <div className="offer-dialog">
            <DialogForm {...this.props} />
            <Buttons {...this.props} />
          </div>

        </div>
      </div>
    );
  }
}

class Message extends Component {
  render () {
    let {sender, content} = this.props;
    return (
      <div className="message">
        <div className="message-sender">
          {sender.first_name}:
        </div>
        <div className="message-content">
          {content}
        </div>
      </div>
    );
  }
}

class DialogForm extends Component {
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
