import React from 'react'
import {Component} from 'react'


class OfferMessages extends Component {
  render () {
    return (
        <div className="message-list">
          {this.props.offer.messages.map(message =>
            <Message key={message.id} {...message}/>
          )}
        </div>
    );
  }
}

class Message extends Component {
  render () {
    return (
      <div className="message">
        <div className="message-sender">
          {this.props.sender.first_name}:
        </div>
        <div className="message-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default OfferMessages
