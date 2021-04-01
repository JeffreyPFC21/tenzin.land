import './App.css';
import Tenzin from './modules/Tenzin';
import Message from './modules/Message';
import Counter from './modules/Counter';
import FunctionClick from './modules/FunctionClick';
import ClassClick from './modules/ClassClick';
import EventBind from './modules/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.discordapp.com/emojis/764118435797925898.png" className="App-logo" alt="logo" />
        <p>
          <ClassClick/>
          <FunctionClick/>
          <Tenzin/>
          <Message/>
          <Counter/>
          <EventBind/>
        </p>
      </header>
    </div>
  );
}

export default App;