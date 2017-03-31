import classNames from 'classnames'
import React from 'react'
import OfferDialog from './offer-dialog'
import OfferMessages from './offer-messages'


export default (props)=> (
  <div className={classNames({
      "offer-list__item card": true,
      "hidden": props.offer.status.isHidden})}>
    <div className="card-content">
      <div className="item-title">
        {props.offer.data.executor.first_name} готов выполнить
        задачу за {props.offer.data.price} рублей
      </div>
      <OfferMessages {...props}/>
      <OfferDialog {...props} />
    </div>
  </div>
)
