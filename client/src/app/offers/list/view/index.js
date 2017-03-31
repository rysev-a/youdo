import React from 'react'
import {Component} from 'react'
import Offer from './offer'

class OfferList extends Component {
  componentDidMount() {
    this.props.fetch(this.props.task.data.id);
  }

  render () {
    return (
      <div className="offer-list">
        <div className="container">
          <h3 className="offer-list-title">Заявки</h3>
          {this.props.offers.data.map(
            offer => (<Offer offer={offer} key={offer.data.id} {...this.props} />)
          )}
        </div>
      </div>
    );
  }
}

export default OfferList
