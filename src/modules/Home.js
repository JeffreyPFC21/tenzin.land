import '../App.css';
import Tenzin from './Tenzin';
import Message from './Message';
import Counter from './Counter';
import EventBind from './EventBind';
import { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return (
      <header className="App-header">
        <a href="https://github.com/SirTenzin/tenzin.wtf">
          <img src="https://cdn.discordapp.com/emojis/764118435797925898.png" className="App-logo" alt="logo" />
        </a>
        <p className="App-home">
          <meta name="theme-color" content="#DDA0DD" />
          <meta
            name="og:image"
            content="https://cdn.discordapp.com/emojis/764118435797925898.png"
          />
          <meta
            name="description"
            content="uwu im poggers"
          />
          <Tenzin />
          <Message />
          <Counter />
          <EventBind />
        </p>

      </header>
    )
  }
}