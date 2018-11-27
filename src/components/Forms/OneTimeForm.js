import React, { Component } from 'react';
import { Form, Input, InputNumber, message, Button, Upload, Icon, Select, Radio } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class OneTimeForm extends Component {
    constructor() {
        super();

        this.state = {
          formLayout: 'horizontal'
        };

    }

    // componentDidMount() {
    // //   let pathSnippets = this.props.location.pathname.split('/');
    // let key =  localStorage.getItem('public-id')
    //   if(localStorage.getItem('public-id')) {
    //     axios.get(`api/clients/${key}`)
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data[0]);
    //         this.setState({
    //           client: res.data[0]
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
        console.log("Sending Form");
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              axios.post(`/api/clients`, values)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.success();
                this.props.history.push('/accounts/change_password');
              });
            // }
          } else {
              console.log('submit error');
              this.error();
          }
        });
    }

    success = () => {
      message.success('One time password accepted', 10);
    };

    error = () => {
      message.error('Wrong code. Please try again...', 10);
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
            <h2>Confirm Account</h2><br/>
            <Form layout={formLayout}>
              <FormItem
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('onetimepass', {
                    rules: [
                    { required: true, message: 'Please input one time password!' },
                    ],
                })(
                    <Input placeholder="Enter one time password" />
                )}
            </FormItem>

              <FormItem {...buttonItemLayout}>
                <Button type="primary" onClick={this.handleSubmit} style={{margin: '5px'}}>CONFIRM</Button>
              </FormItem>
            </Form>
          </div>
        );
    }
}

const OneTime = Form.create()(OneTimeForm);

export default OneTime;