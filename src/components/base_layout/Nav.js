import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect, history} from 'react-router-dom';
import './appLayout.css';

class Nav extends Component {
    render() {
        return(
            <div className="nav">
            {/* <Link to='/dashboard' className="nav-item">DASHBOARD</Link>
            <Link to='/clients' className="nav-item">CLIENTS</Link>
            <Link to='/services' className="nav-item">SERVICES</Link>
            <Link to='/accounts/admin' className="nav-item">ACCOUNTS</Link> */}
                {/* <Link to='/profile' className="nav-item">ClIENT PROFILE</Link> */}
                <Link to='/dashboard' className="nav-item">DASHBOARD</Link>
                <Link to='/clients' className="nav-item">CLIENTS</Link>
                <Link to='/services' className="nav-item">SERVICES</Link>
                <Link to='/accounts/admin' className="nav-item">ACCOUNTS</Link>
            </div>
        );
    }
}

export default Nav;