import React from 'react';
import {Component} from 'react';
import {Route} from 'react-router';


class MapView extends Component {
  render () {
    return (
      <div className="container">map 3</div>
    );
  }
}

const map = <Route path='/' exact={true} component={MapView}/>

export default map
