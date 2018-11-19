import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    marginTop: '10px'
};

class QuotationDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
          loading: true,
          numberOfRecords: 0
        };
    
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
      handleEdit(key) {
        console.log(key);
      }
    
      handleDelete(key) {
        axios.delete(`https://pure-harbor-18418.herokuapp.com/products/${key}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
              loading: true
            })
            axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
              this.setState({
                loading: false,
                products: response.data,
              })
            })
            message.success('Successfully Deleted');
        })
      }
    
      componentDidMount() {
        axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
          // console.log(response.data);
          this.setState({
            loading: false,
            products: response.data,
            numberOfRecords: response.data.length
          })
        })
      }
    render() {
        return(
            <div className="">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="CLIENT" bordered={false}>Oil My Goodness</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="STATUS" bordered={false}>For Approval</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="LAST UPDATED" bordered={false}>11/20/2018</Card>
                    </Col>
                </Row><br/>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="CREATED BY" bordered={false}>Admin</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="STATUS" bordered={false}>For Approval</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="VALID UNTIL" bordered={false}>11/27/2018</Card>
                    </Col>
                </Row><br/>
                <Table 
                    bordered
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={this.state.products}
                    title={()=> 'Services'}
                >
                    <Column
                    title="DESCRIPTION"
                    dataIndex="desc"
                    key="desc"
                    width="40%"
                    />
                    <Column
                    title="QTY"
                    dataIndex="qty"
                    key="qty"
                    width="20%"
                    />
                    <Column
                    title="PRICE"
                    dataIndex="price"
                    key="price"
                    width="40%"
                    />
                </Table><br/>
                <Row gutter={16}>
                    <Col span={16}>
                    </Col>
                    <Col span={8}>
                        <Card title="TOTAL" bordered={false}>10,000</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QuotationDetail;