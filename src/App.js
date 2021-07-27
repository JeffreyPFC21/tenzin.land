import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './modules/Home';
import Portfolio from './modules/Portfolio';
import Bible from './modules/Bible';
import Bot from './modules/Bot';
import Store from './modules/Store';

function App() {
  if (window.location.host.split(".")[0] === "deemo") {
    return (
      <div className="App-header">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Bible />
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
    );
  } else if (window.location.host.split(".")[0] === "bot") {
    return (
      <div className="App-header">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Bot />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else if(window.location.host.split(".")[0] === "store") {
    return (
      <div className="App-header">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Store />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App-header">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              {/* <Route path="/bot">
                <BotDashboard />
              </Route> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;