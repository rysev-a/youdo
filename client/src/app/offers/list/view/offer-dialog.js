import React from 'react'
import classNames from 'classnames'

const updater = ({offer, update}, field) =>
          (e) => update(offer, field, e.target.value);


const formButtons = (props)=> {
  const buttons = [
    {
      title: 'Принять',
      active: props.offer.data.status == 'waiting',
      action: ()=> props.accept(props.offer, props.currentUser)
    },
    {
      title: 'Подтвердить',
      active: props.offer.data.status == 'accepted',
      action: ()=> props.confirm(props.offer, props.currentUser)
    },
    {
      title: 'Отправить',
      active: props.offer.data.status == 'running',
      action: ()=> props.complete(props.offer, props.currentUser)
    }
  ];

  return (
    <div className="form-buttons">
      {buttons.map( (button, index) => (
        <a className={classNames({"button button-success": true,
                                   hidden: !button.active})}
           key={index}
           onClick={button.action}>{button.title}</a>
      ))}

      <a className="button button-primary"
         onClick={()=> props.close(props.offer)}>Отмена</a>
    </div>
  );

};

const offerForm = (props)=> (
  <div className={classNames({'dialog__form': true,
                              'is-open': props.offer.status.isOpen})}>
    <div className="form-item">
        <textarea className="form-control"
                  onChange={updater(props, 'message')}
                  value={props.offer.dialog.message}
        />
      <label className="form-label">Введите сообщение</label>
    </div>
    {formButtons(props)}
  </div>
);


const isDialogHidden = ({offer, task, currentUser}) => {
  if (currentUser.data.id != task.data.customer.id &&
      currentUser.data.id != offer.data.executor.id) {
    return true;
  }

  if (currentUser.data.id != task.data.customer.id &&
      task.data.status == 'waiting') {
    return true;
  }

  if (currentUser.data.id == offer.data.executor.id && 
      task.data.status == 'choising'
    ) {
    return true;
  }

  if (currentUser.data.id == task.data.customer.id &&
      offer.data.status == 'accepted') {
    return true;
  }

  if (offer.data.status == 'running' &&
      currentUser.data.id != offer.data.executor.id) {
    return true;
  }

  if (offer.data.status == 'completed') {
    return true;
  }

  return false;
};


const openForm = ({offer, open, currentUser, task})=> {
  let buttonTitle = 'Принять предложние';

  if (offer.data.status == 'running') {
    buttonTitle = 'Сообщить о завершении';
  }

  return (
    <div className={classNames({'hidden': offer.status.isOpen})}>
      <div className="form-buttons">
        <a className="button button-primary"
           onClick={()=> open(offer)}>{buttonTitle}</a>
      </div>
    </div>
  );
};

export default (props) => {
  return (
    <div className={classNames({
      'dialog': true,
      'hidden': isDialogHidden(props)
    })}>
      {offerForm(props)}
      {openForm(props)}
    </div>
  );
}
