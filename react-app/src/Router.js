import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hell from './pages/Hell/Hell.js'
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/hell" >
          <Hell />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
