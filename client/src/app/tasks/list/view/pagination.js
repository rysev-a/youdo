import classNames from 'classnames'
import React, {Component} from 'react'


const createArray = (count) => (
  Array.from(new Array(count + 1).keys()).filter(e => e != 0)
);

const item = ({pagination, update}, page) =>
  <a key={page}
     className={classNames({
       'task-list__pagination__item': true,
       'active': pagination.page == page
     })}
     onClick={()=> update({page})}>{page}</a>;

const list = ({pagination, update})=>
  createArray(pagination.page_count).map(item.bind(null, {pagination, update}));


const prev = ({pagination, update})=>
  <a className={classNames({
    "task-list__pagination__item prev": true,
    "hidden": pagination.page == 1})}
     onClick={()=>  update({page: pagination.page - 1})}>Назад</a>;

const next = ({pagination, update})=>
  <a className={classNames({
    "task-list__pagination__item next": true,
    "hidden": pagination.page >= pagination.page_count})}
     onClick={()=> update({page: pagination.page + 1})}>Вперед</a>;


export default ({pagination, update}) =>
  <div className={classNames({
      "task-list__pagination": true,
      "hidden": pagination.page_count < 2})}>
    {prev({pagination, update})}
    {list({pagination, update})}
    {next({pagination, update})}
  </div>
