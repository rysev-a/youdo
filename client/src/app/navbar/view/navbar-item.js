import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {IndexLink, Link} from 'react-router';


class NavbarItem extends Component {
  render() {
    let {to, icon, title} = this.props;
    return (
      <Link className="navbar__links-item"
              activeClassName="active" to={to}>
              <i className="material-icons">{icon}</i>
              <span>{title}</span>
      </Link>
    );
  }
}

export default NavbarItem
