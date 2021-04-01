import React, { Component } from 'react';
import './App.css';
import Tenzin from './modules/Tenzin';
import Message from './modules/Message';
import Counter from './modules/Counter';
import EventBind from './modules/EventBind';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header className="App-header">
            <img src="https://cdn.discordapp.com/emojis/764118435797925898.png" className="App-logo" alt="logo" />
            <p>
    
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