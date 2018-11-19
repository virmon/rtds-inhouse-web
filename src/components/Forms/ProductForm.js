import React, { Component } from 'react';
import { Form, Input, InputNumber, message, Button, Upload, Icon, Select, Radio } from 'antd';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const CLOUDINARY_UPLOAD_PRESET = 'ahd96ewi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/doddfudab/upload';

class ProductForm extends Component {
    constructor() {
        super();

        this.state = {
          formLayout: 'horizontal',
          product: [],
          feedback: '',
          uploadedFileCloudinaryUrl: ''
        };


    }

    componentDidMount() {
      let pathSnippets = this.props.location.pathname.split('/');
      if(pathSnippets[2]) {
        axios.get(`https://pure-harbor-18418.herokuapp.com/products/${pathSnippets[2]}`)
          .then(res => {
            console.log(res);
            console.log(res.data[0]);
            this.setState({
              product: res.data[0]
            });
            this.props.form.setFieldsValue({
              name: res.data[0].name,
              cat: res.data[0].cat,
              desc: res.data[0].desc,
              features: res.data[0].features,
              size: res.data[0].size,
              qty: res.data[0].qty,
              price: res.data[0].price,
              status: res.data[0].status,
              mall_price: res.data[0].mall_price,
              primary_img: res.data[0].primary_img
            });
        })
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let pathSnippets = this.props.location.pathname.split('/');
            if(pathSnippets[2]) {
              console.log('Received values of form: ', values);
              axios.put(`https://pure-harbor-18418.herokuapp.com/products/${pathSnippets[2]}`, values)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.success();
                this.props.history.goBack();
              });
            } else {
              console.log('Received values of form: ', values);
              axios.post(`https://pure-harbor-18418.herokuapp.com/products`, values)
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.success();
                this.props.form.setFieldsValue({
                  name: '',
                  cat: '',
                  desc: '',
                  features: '',
                  size: '',
                  qty: '',
                  price: '',
                  status: '',
                  mall_price: '',
                  primary_img: ''
                });
              });
            }
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

    normFile = (e) => {
        console.log('Upload event:', e);
        // e.fileList.map((img) =>
        //   console.log(img.name)
        // )
        // var formData = new FormData();
        // formData.append('file', e.fileList);
        // formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        // axios({
        //   url: CLOUDINARY_UPLOAD_URL,
        //   method: 'POST',
        //   headers: {
        //     'Content-type': 'application/x-www-form-urlencoded'
        //   },
        //   data: formData
        // }).then(function(res) {
        //   console.log(res);
        // }).catch(function(err) {
        //   console.error(err);
        // })
        this.setState({
          uploadedFile: e.file
        });
    
        this.handleImageUpload(e.file);
        if (Array.isArray(e)) {
          // var formData = new FormData();
          // formData.append('file', event.file);
          // formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
          return e;
        }
        return e && e.fileList;
    }

    onImageDrop(files) {
      console.log(files);
      this.setState({
        uploadedFile: files[0]
      });
  
      this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);
  
      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }
  
        if (response.body.secure_url !== '') {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
      });
    }

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
            <h2>Product Form</h2><br/>
            <Form layout={formLayout}>
              <FormItem
                label="Name"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('name', {
                    rules: [
                    { required: true, message: 'Please input a name!' },
                    ],
                })(
                    <Input placeholder="Product Name" />
                )}
              </FormItem>

            <FormItem
                {...formItemLayout}
                label="Category"
                hasFeedback
                >
                {getFieldDecorator('cat', {
                    rules: [
                    { required: true, message: 'Please select a category!' },
                    ],
                })(
                    <Select placeholder="Select category">
                        <Option value="bags">Bags</Option>
                        <Option value="makeups">Make Up</Option>
                        <Option value="skincare">Skincare</Option>
                        <Option value="shoes">Shoes</Option>
                        <Option value="clothes">Clothes</Option>
                        <Option value="others">Others</Option>
                    </Select>
                )}
            </FormItem>

              <FormItem
                label="Description"
                {...formItemLayout}
              >
                {getFieldDecorator('desc')(
                    <TextArea placeholder="Product Description" autosize />
                )
                }
              </FormItem>

              <FormItem
                label="Feature"
                {...formItemLayout}
              >
                {getFieldDecorator('features')(
                    <TextArea placeholder="Product Feature" autosize />
                )
                }
              </FormItem>
              
              <FormItem
                label="Size"
                {...formItemLayout}
              >
              {getFieldDecorator('size')(
                <Input placeholder="Size" />
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
                {...formItemLayout}
                label="Status"
                >
                {getFieldDecorator('status', {
                    rules: [
                    { required: true, message: 'Please select a status!' },
                    ],
                })(
                    <RadioGroup>
                        <RadioButton value="Brand New">Brand New</RadioButton>
                        <RadioButton value="Preloved">Preloved</RadioButton>
                    </RadioGroup>
                )}
            </FormItem>

            <FormItem
                label="Mall Price"
                {...formItemLayout}
              >
                {getFieldDecorator('mall_price', {
                    rules: [
                    { required: true, message: 'Please input the mall price!' },
                    ],
                })(
                    <InputNumber min={1} placeholder="Mall Price" />
                )
                }
                <span className="ant-form-text"> PHP</span>
            </FormItem>

            <FormItem
                label="Set primary image"
                hasFeedback
                {...formItemLayout}
            >
                {getFieldDecorator('primary_img', {
                    rules: [
                    { required: true, message: 'Please set a primary image!' },
                    ],
                })(
                    <Input placeholder="Shoes_Example_1" />
                )}
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Images"
            >
                <div className="dropbox">
                    {getFieldDecorator('images', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <Upload.Dragger name="files" onDrop={this.onImageDrop.bind(this)} multiple={true} style={{padding: '10px'}}>
                        <p className="ant-upload-drag-icon">
                        <Icon type="picture" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                    )}
                </div>
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Images"
            >
              <div className="dropbox">
                {getFieldDecorator('images', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                      <Dropzone
                        multiple={true}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="picture" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      </Dropzone>
                )}
              </div>
            </FormItem>

            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                {/* <img src={this.state.uploadedFileCloudinaryUrl} /> */}
              </div>}
            </div>

              <FormItem {...buttonItemLayout}>
                <Button type="deafult" onClick={() => this.props.history.goBack()} style={{margin: '5px'}}>Cancel</Button>
                <Button type="primary" onClick={this.handleSubmit} style={{margin: '5px'}}>Save</Button>
              </FormItem>
            </Form>
          </div>
        );
    }
}

const WrappedForm = Form.create()(ProductForm);

export default WrappedForm;