import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './modules/Home';
import Portfolio from './modules/Portfolio'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">tenzins nursery</Link>
              <Link to="/portfolio">portflio</Link>
            </li>
          </ul>

          <hr />

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

export default App;