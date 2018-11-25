import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';

class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        }
    }
componentDidMount() {
    const jwt = getJwt();
    console.log(jwt);
    if(!jwt) {
        this.props.history.push('/');
        // return <Redirect to='/' />
    }

    axios.get('https://reqres.in/api/users/2').then(res => this.setState({
        user: res.data
    })).catch(err => {
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('public-id');
        this.props.history.push('/');
    });
    console.log(this.state.user);
}

    render() {
        if(this.state.user === undefined) {
            return(<div><h1>Loading...</h1></div>)
        }
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AuthenticatedComponent);