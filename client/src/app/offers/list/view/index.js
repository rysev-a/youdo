import classNames from 'classnames'
import React from 'react'
import {Component} from 'react'
import Offer from './offer'
import Loader from 'app/core/components/loader'

class OfferList extends Component {
  componentDidMount() {
    this.props.fetch(this.props.task.data.id);
  }

  render () {
    if (this.props.offers.data.length === 0) {
      return false;
    }

    return (
      <div className="offer-list">
        <div className="container">
          <h3 className="offer-list-title">Заявки</h3>
          <Loader processing={this.props.offers.status.processing} />
          <div className="offer-list__content">
            {this.props.offers.data.map(
              offer => (<Offer offer={offer} key={offer.data.id} {...this.props} />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default OfferList
