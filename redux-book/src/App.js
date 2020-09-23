import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/result'>
        <Result />
      </Route>
    </Switch>
  )
}

class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <Routes />
       </Router>
      </div>
    );
  }
}

export default App;
