import React from 'react';
import Submit from './components/Submit';
import Slider from './components/Slider';
import Menu from './components/Menu';

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
        <Router>
          <div className="header">
            <Menu />
          </div>
          <div className="body-app">
            <Switch>
              <Route path="/submit">
                <Submit />
              </Route>
              <Route path="/">
                <Slider />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
