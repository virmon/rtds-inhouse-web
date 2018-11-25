import React from 'react';
import { Form, Input, Icon, Button, Select, InputNumber, message } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

let id = 0;

class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
      key: localStorage.getItem('public-id')
    }

    // this.goBack = this.goBack.bind(this);
}

componentDidMount() {
    axios.get('/api/services/').then(response =>{
        this.setState({
            services: response.data.services
        })
        console.log(response.data.services);
      })
      .catch(function (error) {
        console.log(error);
      })
}
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
        console.log("Save Form");
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              console.log(this.state.key);
              axios.post(`/api/${this.state.key}/quotation`, values)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.success();
                this.props.form.setFieldsValue({
                  promo: '',
                  package: '',
                  desc: [],
                  qty: '',
                  service_name: [],
                  service_type: []
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
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <div style={{borderBottom:'1px solid gray',padding:'5px',marginBottom:'10px'}}>
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Description' : ''}
          required={false}
          key={k-1}
        >
          {getFieldDecorator(`description[${k-1}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: false,
              whitespace: true
            }],
          })(
            <TextArea placeholder="Input your requirements on this service" autosize />
          )}
        </FormItem>
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Service' : ''}
          required={false}
          key={k-1}
        >
          {getFieldDecorator(`service[${k-1}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: false,
              whitespace: true
            }],
          })(
            <Select placeholder="Select service">
            {/* {
              this.state.services.map((service) => 
                <Option value={service.service_name} onChange={this.onChange}>{service.service_name}</Option>
              )
            } */}
              <Option value="Layout Photography">Layout Photography</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Type' : ''}
          required={false}
          key={k-1}
        >
          {getFieldDecorator(`type[${k-1}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: false,
              whitespace: true
            }],
          })(
            <Select placeholder="Select service type">
                        <Option value="Photography">Photography</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Quantity' : ''}
          required={false}
          key={k-1}
        >
          {getFieldDecorator(`qty[${k-1}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true
            }],
          })(
            <Input min={0} placeholder="Quantity" />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      </div>
      );
    });
    return (
        <div>
        <h2 style={{marginBottom:'10px'}}>Request Quotation Form</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormItem
                {...formItemLayout}
                label="Package"
                hasFeedback
                >
                {getFieldDecorator('package', {
                    rules: [
                    { required: false },
                    ],
                })(
                    <Select placeholder="Select a package">
                        <Option value="no package">No Packages</Option>
                    </Select>
                )}
        </FormItem>
        <FormItem
                label="Promo"
                {...formItemLayout}
              >
                {getFieldDecorator('promo', {
                    rules: [
                    { required: false },
                    ],
                })(
                    <Input placeholder="Promo" />
                )
                }
        </FormItem>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add service
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Send Request</Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
export default WrappedDynamicFieldSet;