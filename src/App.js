import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import menus from '../../utils/menu';

// import components
import AppLayout from './components/base_layout/AppLayout';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Accounts/Login';
import AuthenticatedComponent from './components/AuthenticatedComponent';
// import './components/appLayout.css';
import logo from './logo.svg';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthenticatedComponent>
          <Route exact path="/dashboard" component={AppLayout} />
          </AuthenticatedComponent>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
