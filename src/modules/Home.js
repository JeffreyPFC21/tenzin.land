import React, { Component } from 'react';
import '../App.css';
import Tenzin from './Tenzin';
import Message from './Message';
import Counter from './Counter';
import EventBind from './EventBind';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <header className="App-header">
        <a href="https://github.com/SirTenzin/tenzin.land">
          <img src="https://cdn.discordapp.com/emojis/764118435797925898.png" className="App-logo" alt="logo" />
        </a>
        <p className="App-home"> 
          <Tenzin />
          <Message />
          <Counter />
          <EventBind />
        </p>
      </header>
    )
  }
}

export default Home