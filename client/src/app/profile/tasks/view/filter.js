import React, {Component} from 'react'


const updateHandler = (field, update) =>
  (e)=> update({[field]: e.target.value});


export default ({filter, update}) =>
    <div className="task-list__filter">
      <div className="filter-item filter-sort">
        <div className="filter-item">
          Сортировать по:
          <select className="form-control"
            onChange={updateHandler('type', update)}
            value={sort.type}>
            <option value="create_datetime">Дате</option>
            <option value="price">Цене</option>
          </select>
        </div>

        <div className="radio">
          <label>
            <input type="radio"
                   value="asc"
                   checked={sort.order == 'asc'}
                   onChange={updateHandler('order', update)}
                   name="optionsRadios"/>
            <span className="circle"/>
            <span className="check"/>
            Возрастанию
          </label>
        </div>
        <div className="radio">
          <label>
            <input value="desc"
                   type="radio"
                   onChange={updateHandler('order', update)}
                   name="optionsRadios"/>
            <span className="circle"/>
            <span className="check"/>
            Убыванию
          </label>
        </div>
      </div>
    </div>
