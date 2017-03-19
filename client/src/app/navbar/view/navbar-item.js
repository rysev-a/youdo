import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom';


class NavbarItem extends Component {
  render() {
    let {to, icon, title} = this.props;
    return (
      <NavLink className="navbar__links-item"
              activeClassName="active" to={to}>
              <i className="material-icons">{icon}</i>
              <span>{title}</span>
      </NavLink>
    );
  }
}

export default NavbarItem
