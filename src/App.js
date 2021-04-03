import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './modules/Home';
import Portfolio from './modules/Portfolio';
import Bible from './modules/Bible';



function App() {
  if(window.location.host.split(".")[0] === "deemo") {
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
  } else if(window.location.host.split(".")[0] === "images") {
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;