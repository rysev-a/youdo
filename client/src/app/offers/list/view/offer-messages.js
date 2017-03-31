import React from 'react'


export default ({offer: {data: {messages}}})=> (
  <div className="message-list">
    {messages.map( message => (
      <div className="message" key={message.id}>
        <div className="message-sender">
          {message.sender.first_name}:
        </div>
        <div className="message-content">
          {message.content}
        </div>
      </div>
    ))}
  </div>
)
