import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

import DashboardItem from './components/dashboard/DashboardItem';
import PatientList from './components/patients/PatientList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="">
            <Link exact to="/">Dashboard</Link>
            <Link to="/list">Patient List</Link>
            

            <Switch>
              <Route exact path="/" component={DashboardItem}/>
              <Route path="/list" render={PatientList}/>
              <Route component={DashboardItem}/>
          </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
