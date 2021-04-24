import React from 'react';
import Submit from './components/Submit';
import Slider from './components/Slider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body-app">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/submit">Submit</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/submit">
            <Submit />
          </Route>
          <Route path="/">
            <Slider />
          </Route>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
