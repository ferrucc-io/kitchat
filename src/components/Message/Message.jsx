import React from 'react';
import propTypes from 'prop-types';

const Message = props => (props.message.isSender ?
  <div className="chat-message">
    <div className="chat-message-content chat-message-content-sent">
      <span className="chat-message-time">{props.message.time}</span>
      <p>{props.message.message}</p>
    </div>
  </div>
  :
  <div className="chat-message">
    <div className="chat-message-content chat-message-content-received">
      <span className="chat-message-time">{props.message.time}</span>
      <p>{props.message.message}</p>
    </div>
  </div>
);

Message.propTypes = {
  message: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  isSender: propTypes.bool.isRequired,
};

export default Message;
