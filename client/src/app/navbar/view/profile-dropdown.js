import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router';


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
          <Link className="dropdown-menu__item" to="/profile/settings">
            Настройки
          </Link>
          <Link className="dropdown-menu__item" to="/profile/edit">
            Редактировать
          </Link>
          <a className="dropdown-menu__item"
             onClick={this.props.logout}>Выйти</a>
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

export default ProfileDropdown
