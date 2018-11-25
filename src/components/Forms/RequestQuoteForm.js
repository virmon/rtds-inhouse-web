import React, { Component } from 'react';
import { Form, Input, InputNumber, message, Button, Upload, Icon, Select, Radio } from 'antd';
import axios from 'axios';
import request from 'superagent';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RequestQuoteForm extends Component {
    constructor() {
        super();

        this.state = {
            formLayout: 'horizontal',
            quoteDetail: [],
            quoteItems: {},
            quoteDetail: [],
            feedback: '',
            // service: [{type:"", price:0, req:""}],
            cats: [{name:"", age:""}],
            owner: "",
            description: ""
        };

        this.onServiceChange = this.onServiceChange.bind(this);

    }

    handleChange = (e) => {
        if (["name", "age"].includes(e.target.className) ) {
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ cats }, () => console.log(this.state.cats))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
      }
    addCat = (e) => {
        this.setState((prevState) => ({
          cats: [...prevState.cats, {name:"", age:""}],
        }));
      }
    handleSubmit = (e) => { e.preventDefault() }
    

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
        console.log("Send Form");
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let pathSnippets = this.props.location.pathname.split('/');
            if(pathSnippets[2]) {
              console.log('Received values of form: ', values);
            //   axios.put(`/${pathSnippets[2]}`, values)
            //   .then(res => {
            //     console.log(res);
            //     console.log(res.data);
                this.success();
            //     this.props.history.goBack();
            //   });
            this.props.form.setFieldsValue({
                service: '',
                type: '',
                qty: '',
                price: '',
                req: ''
              });
            } else {
              console.log('Received values of form: ', values);
            //   axios.post(``, values)
            //   .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            //     this.success();
                this.props.form.setFieldsValue({
                  service: '',
                  type: '',
                  qty: '',
                  price: '',
                  req: ''
                });
            //   });
            }
          } else {
              console.log('submit error');
              this.error();
          }
        });
    }

    onServiceChange = (e) => {
        // this.setState({
        //     site: e.currentTarget.value
        // });
        console.log(e.target.value);
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
            {/* <h2>Request Quotation Form</h2><br/> */}
            <Form>
            {/* <Button type="primary" style={{marginBottom:'20px'}}>
                Add New Service
            </Button> */}
            <FormItem
                {...formItemLayout}
                label="Services"
                >
                {getFieldDecorator('service', {
                    rules: [
                    { required: true, message: 'Please select a service!' },
                    ],
                })(
                    <RadioGroup>
                        <RadioButton value="Branding">Branding</RadioButton>
                        <RadioButton value="Photography">Photography</RadioButton>
                        <RadioButton value="Graphic Design">Graphic Design</RadioButton>
                        <RadioButton value="Stickers">Stickers</RadioButton>
                        <RadioButton value="Prints">Prints</RadioButton>
                        <RadioButton value="Web Design">Web Design</RadioButton>
                        <RadioButton value="Digital Marketing">Digital Marketing</RadioButton>
                    </RadioGroup>
                )}
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Type"
                hasFeedback
                >
                {getFieldDecorator('type', {
                    rules: [
                    { required: true, message: 'Please select a service type!' },
                    ],
                })(
                    <Select placeholder="Select category">
                        <Option value="layout">Layout Design</Option>
                        <Option value="Stickers">Stickers</Option>
                    </Select>
                )}
            </FormItem>
        
              <FormItem
                label="Quantity"
                {...formItemLayout}
              >
                {getFieldDecorator('qty', {
                    rules: [
                    { required: true, message: 'Please input a quantity!' },
                    ],
                })(
                    <InputNumber min={0} placeholder="Quantity" />
                )
                }
                
              </FormItem>

              <FormItem
                label="Price"
                {...formItemLayout}
              >
                {getFieldDecorator('price', {
                    rules: [
                    { required: true, message: 'Please input a price!' },
                    ],
                })(
                    <InputNumber min={1} placeholder="Price" />
                )
                }
                <span className="ant-form-text"> PHP</span>
              </FormItem>

              <FormItem
                label="Requirements"
                {...formItemLayout}
              >
                {getFieldDecorator('req')(
                    <TextArea placeholder="Reuirements" autosize />
                )
                }
              </FormItem>

              <FormItem {...buttonItemLayout}>
                <Button type="deafult" onClick={() => this.props.history.goBack()} style={{margin: '5px'}}>Cancel</Button>
                <Button type="primary" onClick={this.handleSubmit} style={{margin: '5px'}}>Send Request</Button>
              </FormItem>
            </Form>
          </div>
        );
    }
}

const WrappedForm = Form.create()(RequestQuoteForm);

export default WrappedForm;