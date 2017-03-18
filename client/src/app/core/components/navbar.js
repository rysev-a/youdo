import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';


const navbarItem = (title, path)=> {
  return <NavLink className="navbar__links-item"
                  activeClassName="active" to={path}>
                  {title}</NavLink>;
}

class Navbar extends Component {
  render() {
    return <nav className="navbar">
      <div className="container">
        <NavLink to='/' className="navbar__logo">YouDo Service</NavLink>
        <div className="navbar__links">
          {navbarItem('Добавить задачу', '/tasks')}
          <ProfileDropdown/>
        </div>
      </div>
    </nav>;
  }
}

class ProfileDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click',this.handleDocumentClick, false);
    document.addEventListener('touched', this.handleDocumentClick, false);
  }
  componentWillUnmount () {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  render () {
    let className = this.state.isOpen ? 'dropdown open' : 'dropdown';

    return (
      <div className={className}>
        <a className="navbar__links-item navbar__links-profile"
           onClick={this.toggleDropdown.bind(this)}>
          <i className="material-icons">account_circle</i>
          <span>Профиль</span>
          <div className="caret"></div>
        </a>
        <div className="dropdown-menu" onClick={this.toggleDropdown.bind(this)}>
          <a className="dropdown-menu__item">Настройка</a>
          <a className="dropdown-menu__item">Выйти</a>
        </div>
      </div>
    );
  }

  toggleDropdown (e) {
    this.setState({'isOpen': !this.state.isOpen});
  }

  handleDocumentClick (event) {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({ isOpen: false })
      }
    }
  }
}

export default Navbar
