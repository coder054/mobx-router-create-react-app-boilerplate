import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import TodoIndex from './components/TodoIndex';
import User from './components/User';
import requireAuth from './components/HOC/requireAuth';






@withRouter
@observer
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={requireAuth(TodoIndex)} />
          <Route exact path="/user" component={requireAuth(User)} />

        </Switch>
      </div>
    );
  }
}

export default App;
