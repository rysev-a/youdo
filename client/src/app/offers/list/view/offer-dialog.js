import React from 'react'
import classNames from 'classnames'

const updater = ({offer, update}, field) =>
          (e) => update(offer, field, e.target.value);

const form = (props)=> (
  <div className={classNames({'dialog__form': true,
                              'is-open': props.offer.status.isOpen})}>
    <div className="form-item">
      <input type="number"
             value={props.offer.dialog.price}
             onChange={updater(props, 'price')}
             className="form-control"/>
      <label className="form-label">Окончательная цена</label>
    </div>
    <div className="form-item">
        <textarea className="form-control"
                  onChange={updater(props, 'message')}
                  value={props.offer.dialog.message}
        />
      <label className="form-label">Введите сообщение</label>
    </div>
  </div>
);

const buttons = ({offer, open, close, submit})=> (
    <div className="form-buttons">
      <div className={classNames({'hidden': offer.status.isOpen})}>
        <a className="button button-primary"
           onClick={()=> open(offer)}>Принять предложение</a>
      </div>

      <div className={classNames({'hidden': !offer.status.isOpen})}>
        <a className="button button-success"
           onClick={()=> submit(offer)}>Отправить</a>
        <a className="button button-primary"
           onClick={()=> close(offer)}>Отмена</a>
      </div>
    </div>
);

export default (props) => (
  <div className="dialog">
    {form(props)}
    {buttons(props)}
  </div>
)
