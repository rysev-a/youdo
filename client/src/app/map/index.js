import React from 'react';
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


class MapView extends Component {
  render () {
    return (
      <div className="container">map</div>
    );
  }
}

const map = <Route path='/' exact={true} component={MapView}/>

export default map
