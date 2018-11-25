import React, { Component } from 'react';
import { Form, Input, InputNumber, message, Button, Upload, Icon, Select, Radio } from 'antd';
import axios from 'axios';
import request from 'superagent';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ClientForm extends Component {
    constructor() {
        super();

        this.state = {
          formLayout: 'horizontal',
          product: [],
          feedback: ''
        };

    }

    // componentDidMount() {
    //   let pathSnippets = this.props.location.pathname.split('/');
    //   if(pathSnippets[2]) {
    //     axios.get(`https://pure-harbor-18418.herokuapp.com/products/${pathSnippets[2]}`)
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data[0]);
    //         this.setState({
    //           product: res.data[0]
    //         });
    //         this.props.form.setFieldsValue({
    //           name: res.data[0].name,
    //           cat: res.data[0].cat,
    //           desc: res.data[0].desc,
    //           features: res.data[0].features,
    //           size: res.data[0].size,
    //           qty: res.data[0].qty,
    //           price: res.data[0].price,
    //           status: res.data[0].status,
    //           mall_price: res.data[0].mall_price,
    //           primary_img: res.data[0].primary_img
    //         });
    //     })
    //   }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Save Form");
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              axios.post(`/api/clients`, values)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.success();
                this.props.form.setFieldsValue({
                  firstname: '',
                  lastname: '',
                  company_name: '',
                  email: '',
                  mobile: ''
                });
              });
            // }
          } else {
              console.log('submit error');
              this.error();
          }
        });
    }

    success = () => {
      message.success('Saved Successfully', 10);
    };

    error = () => {
      message.error('Could not be saved. Please try again...', 10);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { setFieldsValue } = this.props.form;
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
          <div>
            <h2>New Client Form</h2><br/>
            <Form layout={formLayout}>
              <FormItem
                label="First Name"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('firstname', {
                    rules: [
                    { required: true, message: 'Please input first name!' },
                    ],
                })(
                    <Input placeholder="Firstname" />
                )}
            </FormItem>

            <FormItem
                label="Last Name"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('lastname', {
                    rules: [
                    { required: true, message: 'Please input last name!' },
                    ],
                })(
                    <Input placeholder="Lastname" />
                )}
            </FormItem>

            <FormItem
                label="Company"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('company_name', {
                    rules: [
                    { required: true, message: 'Please input company!' },
                    ],
                })(
                    <Input placeholder="Company" />
                )}
            </FormItem>

            <FormItem
                label="Email"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('email', {
                    rules: [
                    { required: true, message: 'Please input an email!' },
                    ],
                })(
                    <Input placeholder="Email" />
                )}
            </FormItem>

            <FormItem
                label="Mobile"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('mobile', {
                    rules: [
                    { required: true, message: 'Please input mobile number!' },
                    ],
                })(
                    <Input placeholder="Mobile number" />
                )}
            </FormItem>

              <FormItem {...buttonItemLayout}>
                <Button type="deafult" onClick={() => this.props.history.goBack()} style={{margin: '5px'}}>Cancel</Button>
                <Button type="primary" onClick={this.handleSubmit} style={{margin: '5px'}}>Save</Button>
              </FormItem>
            </Form>
          </div>
        );
    }
}

const WrappedForm = Form.create()(ClientForm);

export default WrappedForm;