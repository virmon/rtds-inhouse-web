import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import menus from '../../utils/menu';

// import components
import Login from './components/Accounts/Login';
import AdminApp from './components/Portal/AdminApp';
import ClientApp from './components/Portal/ClientApp';
import ClientList from './components/Clients/ClientList';
import NoMatch from './components/NoMatch/NoMatch';
import AuthenticatedComponent from './components/AuthenticatedComponent';
// import './components/appLayout.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthenticatedComponent>
            <Route exact path="/dashboard" component={AdminApp} />
            <Route exact path="/profile" component={ClientApp} />
            {/* <Route exact path="/dashboard" component={Dashboard}/> */}
            <Route exact path="/clients" component={ClientList}/>
          </AuthenticatedComponent>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
