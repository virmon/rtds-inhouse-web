import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row, Button } from 'antd';
import axios from 'axios';
import InvoiceTable from '../Tables/InvoiceTable';

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
          quoteDetail: []
        };
    
        // this.handleEdit = this.handleEdit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
      }
    
    //   handleEdit(key) {
    //     console.log(key);
    //   }
    
    //   handleDelete(key) {
    //     axios.delete(`https://pure-harbor-18418.herokuapp.com/products/${key}`)
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //         this.setState({
    //           loading: true
    //         })
    //         axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
    //           this.setState({
    //             loading: false,
    //             products: response.data,
    //           })
    //         })
    //         message.success('Successfully Deleted');
    //     })
    //   }
    
    componentDidMount() {
        let pathSnippets = this.props.location.pathname.split('/');
        console.log(pathSnippets[2]);
        axios.get('/api/quotation/'+pathSnippets[2]).then(response =>{
            this.setState({
                quoteDetail: response.data
            })
            console.log(response.data.quote_validity);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render() {
        return(
            <div className="">
                <Button type="primary" onClick={() => this.props.history.goBack()} style={{margin: '5px'}}>Back</Button>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="CLIENT" bordered={false}>Oil My Goodness</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="STATUS" bordered={false}>{this.state.quoteDetail.quote_status}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="LAST UPDATED" bordered={false}>{this.state.quoteDetail.quote_validity}</Card>
                    </Col>
                </Row><br/>
                {/* <Row gutter={16}>
                    <Col span={8}>
                        <Card title="CREATED BY" bordered={false}>Admin</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="STATUS" bordered={false}>For Approval</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="VALID UNTIL" bordered={false}>{this.state.quoteDetail.quote_validity}</Card>
                    </Col>
                </Row><br/> */}
                <Table 
                    bordered
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={this.state.quoteDetail.quotation_details}
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
                    dataIndex="unit_price"
                    key="unit_price"
                    width="40%"
                    />
                </Table><br/>

                <InvoiceTable/><br/>

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