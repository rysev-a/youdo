import React, {Component} from 'react'
import {getStatusText} from 'app/core/helpers/localization'
import settings from 'app/settings'


const updateStatus = (field, update, statuses) => 
  (e)=> {
    if (statuses.filter(s => s == e.target.name).length) {
      update({'statuses': statuses.filter(s => s != e.target.name)})
    } else {
      update({'statuses': [...statuses, e.target.name]});
    }
  };

const updateAll = (update, set, statuses) => ()=> {
  if (statuses.length == 6) {
    update({statuses: []});
  } else {
    update({statuses: settings.STATUSES})
  }
}

const getChecked = (status, statuses) => 
  statuses.filter(s => s == status).length;

const checkItem = (update, statuses, status) => {
  return <div className="checkbox" key={status}>
    <label>
      <input type="checkbox"
             checked={getChecked(status, statuses)}
             onChange={updateStatus('status', update, statuses)}
             name={status}/>
      <span className="checkbox-material">
        <span className="check"></span>
      </span>
      {getStatusText(status)}
    </label>
  </div>
}

export default ({filter, set, update}) =>
    <div className="task-list__filter">
      <div className="filter-item statuses">
        Отображать задачи:
        <div className="checkbox">
          <label>
            <input type="checkbox"
                   checked={filter.statuses.length == 6}
                   onChange={updateAll(update, set, filter.statuses)} />
            <span className="checkbox-material">
              <span className="check"></span>
            </span>
            Все задачи
          </label>
        </div>
        <hr/>
        {settings.STATUSES.map(checkItem.bind(null, update, filter.statuses))}
      </div>
    </div>
