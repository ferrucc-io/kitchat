import React, { Component } from 'react';
import './chatHistory.css';


class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="chat-username-select">
          Test { this.state.messages } { this.sendMessage }
      </div>
    );
  }
}

export default ChatHistory;
