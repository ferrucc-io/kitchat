import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Functions
import { supportName, messageList } from '../../actions';

// Assets
import logo from './kit-chat.svg';
import close from './close-icon.png';

// Stylesheet
import './Chat.css';

// Components
import ChatHeader from '../ChatHeader/ChatHeader';
import Message from '../Message/Message';


class KitChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      unreadMessages: 1,
      username: '',
    };
  }

  componentWillMount() {
    this.props.messageList();
    this.props.supportName();
  }
    /*
    componentDidMount () {
        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:27f08714-1189-41aa-9453-658ca1c7f3f3',
          userId: this.props.currentUsername,
          tokenProvider: new Chatkit.TokenProvider({
            url: 'http://localhost:3001/authenticate'
          })
        })

        chatManager
          .connect()
          .then(currentUser => {
            this.setState({ currentUser })
          })
          .catch(error => console.error('error', error))
    }
    */

    getUserRef = (usernameRef) => { this.username = usernameRef; }

    saveUsername = (event) => {
      event.preventDefault();
      this.setState({ username: this.username.value });
    }

    toggleChat = () => {
      this.setState(() => ({
        open: !(this.state.open),
      }));
    }

    render() {
      const showLogoClasses = 'kitchat-logo show';
      const hideLogoClasses = 'kitchat-logo hide';
      const showBadgeClasses = 'chat-badge show';
      const hideBadgeClasses = 'chat-badge hide';
      const showCloseClasses = 'kitchat-close show';
      const hideCloseClasses = 'kitchat-close hide';
      const showChatClasses = 'kitchat-chat show';
      const hideChatClasses = 'kitchat-chat hide';

      const hideChat = 'chat hide';
      const showChat = 'chat';
      const hideUsernameSelect = 'chat-username-select hide';
      const showUsernameSelect = 'chat-username-select';
      const isOpen = this.state.open;
      const { unreadMessages, username } = this.state;

      const isUsernameSelect = (this.state.username !== '');

      const firstMessage = {
        isSender: false,
        message: "Hey, what's your name?",
        time: '11.10',
      };
      console.log(this.props.messageList);
      return (
        <div>
          <button className="chat-button" onClick={this.toggleChat}>
            <div className={isOpen ? hideBadgeClasses : showBadgeClasses}>
              {unreadMessages}
            </div>
            <img src={logo} className={isOpen ? hideLogoClasses : showLogoClasses} alt="logo" />
            <img src={close} className={isOpen ? showCloseClasses : hideCloseClasses} alt="close" />
          </button>
          <div className={isOpen ? showChatClasses : hideChatClasses}>
            <ChatHeader supportName="Ferruccio Balestreri" />
            <div className={isUsernameSelect ? hideUsernameSelect : showUsernameSelect}>
              <div className="chat-insert-username-spacing">
                <Message message={firstMessage} />
              </div>
              <form onSubmit={this.saveUsername} className="chat-form">
                <input type="text" placeholder="Type your message…" className="chat-input" ref={this.getUserRef} />
              </form>
            </div>
            <div className={isUsernameSelect ? showChat : hideChat}>
              <div className="chat-history">
                <div className="chat-message">
                  <div className="chat-message-content chat-message-content-received">
                    <span className="chat-message-time">11:12</span>
                    <p>Hi {username}, how can I help you?</p>
                  </div>
                </div>
              </div>
              <form method="post" className="chat-form">
                <input type="text" placeholder="Type your message…" className="chat-input" />
              </form>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  data: state.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  supportName,
  messageList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KitChat);
