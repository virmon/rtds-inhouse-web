import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
            this.props.history.push('/');
        }

        axios.get('http://rtds-api-brian.herokuapp.com/login/admin', {headers: {Authorization: `Bearer ${jwt} `} }).then(res => this.setState({
            user: res.data
        })).catch(err => {
            localStorage.removeItem('jwt');
            this.props.history.push('/');
        });
    }

    render() {
        if(this.state.user === undefined) {
            return(
                <div><h3>Loading...</h3></div>
            );
        }
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AuthenticatedComponent);