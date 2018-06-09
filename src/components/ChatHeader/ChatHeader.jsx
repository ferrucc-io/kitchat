import React from 'react';
import propTypes from 'prop-types';

// Stylesheet
import './ChatHeader.css';

const ChatHeader = props => (
  <div className="kitchat-header">
    <h4 className="kitchat-name">{props.supportName}</h4>
  </div>
);

ChatHeader.propTypes = {
  supportName: propTypes.string.isRequired,
};

export default ChatHeader;
