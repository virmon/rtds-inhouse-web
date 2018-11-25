import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
            axios.post('https://reqres.in/api/login', {
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                localStorage.setItem('x-access-token', res.data.token);
                this.props.history.push('/dashboard');
            });
        }
    }

//   render() {
    //   return(
        //   <div>
        //       <form>
        //           <label>email</label><input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
        //           <label>password</label><input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
        //       </form>
        //   </div>
    //   );
    // }

export default Login;