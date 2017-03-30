import React from 'react'
import {Component} from 'react'
import OfferDialog from './offer-dialog'
import OfferMessages from './offer-messages'


class Offer extends Component {
  render () {
    let {executor, messages, price} = this.props.offer;
    return (
      <div className="offer-list__item card">
        <div className="card-content">
          <div className="item-title">
            {executor.first_name} готов выполнить
            вашу задачу за {price} рублей
          </div>

          <OfferMessages {...this.props} />
          <OfferDialog {...this.props} />
        </div>
      </div>
    );
  }
}

export default Offer
