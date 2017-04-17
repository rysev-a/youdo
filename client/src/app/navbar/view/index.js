import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router'
import NavbarItem from './navbar-item'
import ProfileDropdown from './profile-dropdown'
import Notifications from './notifications'
import TaskMenu from './task-menu'

class Navbar extends Component {
  render() {
    let links = this.props.currentUser.is_authenticated ? 
      this.profileLinks.bind(this) : this.userLinks.bind(this);

    return <nav className="navbar">
      <div className="container">
        <Link to='/' className="navbar__logo">YouDo Service</Link>
        <div className="navbar__links">
          {links()}
        </div>
      </div>
    </nav>;
  }

  profileLinks () {
    return (
      <div className="profile-links">
        <NavbarItem title="Добавить задачу" 
                 icon="add_cicle"
                 to="/tasks/create" />
        <NavbarItem title="Найти задачу"
                icon="search"
                to="/tasks/list" />
        <TaskMenu/>
        <ProfileDropdown {...this.props}/>
        <Notifications {...this.props}/>
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
