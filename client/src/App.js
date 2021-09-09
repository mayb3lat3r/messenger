import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { Auth, Home } from './pages'

class App extends Component {
  render() {
    return <div className="wrapper">
      <Route exact path={['/', '/login', '/register']} component={Auth} />
      <Route exact path="/im" component={Home} />
      <Redirect to="/" />
    </div>
  }
}

export default App;
