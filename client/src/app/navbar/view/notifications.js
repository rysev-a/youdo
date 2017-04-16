import classNames from 'classnames'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router';


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click',this.handleDocumentClick, false);
    document.addEventListener('touched', this.handleDocumentClick, false);

    this.props.getNotifications(1, this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  render () {
    let className = this.state.isOpen ?
      'dropdown open notifications' : 'dropdown notifications';

    let newNotifications = this.props.notifications.data.length;

    return (
      <div className={className}>
        <a className="navbar__links-item navbar__links-notifications"
           onClick={this.toggleDropdown.bind(this)}>
          <i className="material-icons">notifications</i>


          <span className={classNames({
              'count': true,
              'hidden': !newNotifications})}>
            {this.props.notifications.data.length}
          </span>
        </a>
        <div className="dropdown-menu" onClick={this.toggleDropdown.bind(this)}>
          {this.props.notifications.data.map((notification) => {
           return <Link className="dropdown-menu__item"
                        onClick={()=> {
                          this.props.read(notification.id);
                          return false;
                        }}
                        key={notification.id}
                        to={`/tasks/${notification.task_id}`}>
             {notification.content}
          </Link>
          })}
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

export default Notifications
