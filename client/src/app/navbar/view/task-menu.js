import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'


class TaskMenu extends Component {
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
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  render () {
    let className = this.state.isOpen ?
      'dropdown open task-menu' : 'dropdown task-menu';


    return (
      <div className={className}>
        <a className="navbar__links-item navbar__links-notifications"
           onClick={this.toggleDropdown.bind(this)}>
          <i className="material-icons">view_list</i>
          <span>Мои задачи</span>
          <div className="caret"></div>
        </a>
        <div className="dropdown-menu" onClick={this.toggleDropdown.bind(this)}>
          <Link className="dropdown-menu__item" to="/profile/tasks/created">
            Созданные
          </Link>
          <Link className="dropdown-menu__item" to="/profile/tasks/executed">
            Исполняемые
          </Link>
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


export default TaskMenu
