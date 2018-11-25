import React, { Component } from 'react';
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
    if(!jwt) {
        // this.props.history.push('/dashboard');
        console.log('no token');
    }

    axios.get('https://reqres.in/api/login').then(res => res.setState({
        user: res.data.email
    })).catch(err => {
        localStorage.removeItem('x-access-token');
        // this.props.history.push('/dashboard');
        console.log('remove token');
    });
    // console.log(this.state.user);
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

export default AuthenticatedComponent;