import React, { Component, Fragment } from 'react';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './component/NotFound';
import BeforeLogin from './component/BeforeLogin';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <BeforeLogin />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
};
export default App;
