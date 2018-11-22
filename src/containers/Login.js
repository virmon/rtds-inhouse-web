import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./login.css";
import auth from '../auth';
import { PostData } from '../components/services/PostData';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: ""
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    login() {
        PostData('login', this.state).then((result) => {
            let responseJson = result;
            console.log(responseJson);
        })
    }

    handleChange(event) {
        this.setState({ 
            [event.target.id]: event.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        axios.post('https://rtds-api-brian.herokuapp.com/login/admin', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('x-access-token', res.data.admin[0].token);
            this.props.history.push('/dashboard');
        });
        console.log(localStorage);
    }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }
// handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }

    render() {
        const { getFieldDecorator } = this.props.form;
        const jwt = getJwt();
        if(jwt) {
            this.props.history.push('/dashboard');
        }
        return (
            <div className="login-container">
                <div className="Login">
                    <Form onSubmit={this.submit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text" placeholder="email" onChange={this.handleChange}/>
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" onChange={this.handleChange}/>
                        )}
                        </FormItem>
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                        {/* <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            onClick={() => 
                                auth.login(() => 
                                    this.props.history.push("/clients")
                                )
                            }
                        >
                            Log in
                        </Button> */}
                        {/* <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            onClick={this.login}
                        >
                            Log in
                        </Button> */}
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
