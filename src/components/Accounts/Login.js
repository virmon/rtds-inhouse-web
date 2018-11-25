import React, { Component } from 'react';
import { history, withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // axios.post('https://reqres.in/api/login', {
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('x-access-token', res.data.token);
            localStorage.setItem('public-id', res.data.public_id);
            console.log(res.data);
            this.props.history.push('/dashboard');
        });
    }
    render() {
        return(
            <div>
              <form onSubmit = {e => this.handleSubmit(e)} >
                  <label>email</label><input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                  <label>password</label><input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  <button type="submit">Login</button>
              </form>
              <ul>
                  <li>username: omg@email</li>
                  <li>password: OMG123</li>
              </ul><br/>
              <ul>
                  <li>default password for new admins created</li>
                  <li>password: (lastname)123</li>
              </ul>
          </div>
        );
    }
}

export default Login;