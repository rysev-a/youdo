import classNames from 'classnames'
import React from 'react'
import {Component} from 'react'


class Loader extends Component {
  render () {
    let className = classNames({
      'loader': true,
      'hidden': this.props.hidden
    });
    return (
      <div className={className}>
        <div className="ball-pulse">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loader
