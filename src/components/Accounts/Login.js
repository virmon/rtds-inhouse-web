import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { history, withRouter } from 'react-router-dom';
import ClientForm from '../Forms/ClientForm';
import axios from 'axios';
import './login.css';

class SignUp extends Component {
    render() {
        return(
            <div>
                <form onSubmit = {e => this.handleSubmit(e)} >
                    <div style={{width:'50%', height:'50%', border:'1px solid rgb(171, 211, 186)', padding:'30px', margin:'10px'}}>
                        <h2>Sign Up</h2>
                        <ClientForm />
                    </div>
                </form>
            </div>
        );
    }
}

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
            localStorage.setItem('role', res.data.admin);
            // console.log(res.data.admin);
            if(res.data.admin) {
                this.props.history.push(`/dashboard`);
            }
            else {
                this.props.history.push(`/profile`);
            }
        });
    }
    render() {
        return(
            <div>
              <form onSubmit = {e => this.handleSubmit(e)} >
                  <div style={{width:'50%', height:'50%', border:'1px solid rgb(171, 211, 186)', padding:'30px', margin:'10px'}}>
                    <h2>Login</h2>
                    <label>Email</label><input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    <label>Password</label><input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    <button className="login-btn" type="submit">Login</button>
                    {/* <Button className="login-btn" type="submit">Login</Button> */}
                  </div>
              </form>

              <SignUp />
            
              <ul>
                  <li>username: mckflowers@gmail.com</li>
                  <li>password: mckflowers123</li>
              </ul><br/>
              <ul>
                  <li>default password for new admins created</li>
                  <li>password: 123456</li>
              </ul>
          </div>
        );
    }
}

export default Login;