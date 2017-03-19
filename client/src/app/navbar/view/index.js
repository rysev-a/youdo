import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom';
import NavbarItem from './navbar-item';
import ProfileDropdown from './profile-dropdown';


class Navbar extends Component {
  render() {
    let links = this.props.currentUser.is_authenticated ? 
      this.profileLinks.bind(this) : this.userLinks.bind(this);

    return <nav className="navbar">
      <div className="container">
        <NavLink to='/' className="navbar__logo">YouDo Service</NavLink>
        <div className="navbar__links">
          {links()}
        </div>
      </div>
    </nav>;
  }

  profileLinks () {
    return (
      <div className="profile-links">
        <NavbarItem title='Добавить задачу' 
                 icon='add_cicle'
                 to='/tasks/add' />
        <NavLink className="navbar__links-item"
                activeClassName="active" to='/tasks/find'>
                <i className="material-icons">search</i>
                <span>Найти задачу</span>
        </NavLink>
        <ProfileDropdown logout={this.props.logout}/>
      </div>
    );
  }

  userLinks () {
    return (
      <div className="user-links">
        <NavbarItem title='Войти' 
                 icon='fingerprint' 
                 to='/profile/login' />
        <NavbarItem title='Зарегистрироваться' 
                 icon='person_add'
                 to='/profile/register' />
      </div>
    );
  }
}

export default Navbar
