import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import logo from './logo.svg';
import './App.css';
import KitChat from './components/Chat/kitchat';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chat</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <KitChat />
        </Provider>
      </div>
    );
  }
}

export default App;
