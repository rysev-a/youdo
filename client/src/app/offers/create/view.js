import classNames from 'classnames'
import React from 'react'
import {Component} from 'react'
import Loader from 'app/core/components/loader'


class OfferCreate extends Component {
  componentDidMount () {
    this.props.init({price: this.props.task.data.price});
  }

  componentWillUnmount () {
    this.props.reset();
  }

  render () {
    let className = classNames({
      'offer-create__form': true,
      'is-open': this.props.offer.status.isOpen
    });

    if (this.props.hidden) {
      return <div className="offer-create hidden"/>
    }

    if (this.props.offer.status.loaded == false) {
      return (
        <div className="container">
          <div className="card">
            <div className="card-content">
              <Loader />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="offer-create container">
        <div className="card">
          <div className="card-content">
            <div className={className}>
              <div className="form-item">
                <input type="number" className="form-control"
                       defaultValue={this.props.offer.data.price}
                       onChange={this.update('price')}/>
                <label className="form-label">Ваша цена</label>
              </div>
              <div className="form-item">
                <textarea className="form-control"
                          defaultValue={this.props.offer.data.message}
                          onChange={this.update('message')}/>
                <label className="form-label">Введите сообщение</label>
              </div>
            </div>
            <Buttons {...this.props} />
          </div>
        </div>
      </div>
    );
  }

  update (field) {
    return (e)=> (this.props.update(field, e.target.value));
  }
}


class Buttons extends Component {
  render () {
    if (this.props.offer.status.isOpen) {
      return (
        <div className="task-item__buttons form-buttons">
          <a className="button button-success"
             onClick={this.submit.bind(this)}>Отправить</a>
          <a className="button button-primary"
             onClick={this.props.close}>Отмена</a>
        </div>
      )
    }

    return (
      <div className="task-item__buttons form-buttons">
        <a className="button button-primary"
           onClick={this.props.open}>Предложить свои услуги</a>
      </div>
    );
  }

  submit () {
    let offer = {
      executor_id: this.props.profile.data.id,
      task_id: this.props.task.data.id,
      message: this.props.offer.data.message,
      price: this.props.offer.data.price
    };

    this.props.submit(offer);
  }
}


export default OfferCreate
