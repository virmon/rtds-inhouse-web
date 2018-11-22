import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AuthenticatedComponent from './components/AuthenticatedComponent';

// import menus from '../../utils/menu';

// import components
import Login from "./containers/Login";
import AppLayout from './components/base_layout/AppLayout';
import NoMatch from './components/NoMatch/NoMatch';
// import './components/appLayout.css';
import logo from './logo.svg';
// import { ProtectedRoute } from './components/protected.route';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <AuthenticatedComponent> */}
            <Route exact path="/dashboard" component={AppLayout}/>
            <Route exact path="/form" component={Login}/>
          {/* </AuthenticatedComponent> */}
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
