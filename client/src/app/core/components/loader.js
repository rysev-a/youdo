import classNames from 'classnames'
import React from 'react'


export default ({processing})=> (
  <div className={classNames({
    loader: true,
    processing: processing
  })}>
    <div className="ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)
