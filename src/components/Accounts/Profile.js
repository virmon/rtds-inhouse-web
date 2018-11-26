import React, { Component } from 'react';
import { Table, Button, Card, Col, Row, message } from 'antd';
import QuotationTable from '../Tables/QuotationTable';
import InvoiceTable from '../Tables/InvoiceTable';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            key: localStorage.getItem('public-id'),
            client: '',
            quotations: [],
            invoices: []
        }
    
        this.handleApprove = this.handleApprove.bind(this);
    }

    handleApprove(id) {
        axios.put(`/api/${this.state.key}/quotation/${id}`).then(response =>{
            console.log(`client approved quotation #(${id})`);
            this.success();
        })
        .catch(function (error) {
            console.log(error);
            this.error();
        })
    }

    handleReject(id) {
        axios.put(`/api/quotation/${id}/reject`).then(response =>{
            console.log(`admin rejected quotation #(${id})`);
            this.successReject();
          })
          .catch(function (error) {
            console.log(error);
            this.errorReject();
          })
    }

    componentDidMount() {
        // let pathSnippets = this.props.location.pathname.split('/');
        // console.log(pathSnippets[2]);
        axios.get(`/api/clients/${this.state.key}`).then(response =>{
            this.setState({
                client: response.data.client[0].company_name,
                quotations: response.data.quotations,
                invoices: response.data.invoices
            })
            console.log("profile:"+response.data.invoices);
          })
          .catch(function (error) {
            console.log(error);
          })
    }


    success = () => {
        message.success('Approved Successfully', 10);
    };
  
    error = () => {
        message.error('Could not be approved.', 10);
    };

    successReject = () => {
        message.success('Rejected Successfully', 10);
    };
  
    errorReject = () => {
        message.error('Could not be rejected.', 10);
    };


    render() {
        return(
            <div>
                <Button type="primary" style={{marginBottom:'20px'}}>
                    <Link to="/request/quotation">Request Quotation</Link>
                </Button>
                {/* <Row gutter={16}>
                    <Col span={8}>
                        <Card title="CLIENT" bordered={false}>Oil My Goodness</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="QUOTATIONS" bordered={false}>10</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="INVOICES" bordered={false}>10</Card>
                    </Col>
                </Row><br/> */}
                <h1>{this.state.client}</h1><br/>
                <Table 
                    bordered 
                    title={() => 'All Quotations'}
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={this.state.quotations}
                >
                    <Column
                    title="Quotation No."
                    dataIndex="quote_id"
                    key="quote_id"
                    width="10%"
                    />
                    <Column
                    title="Status"
                    dataIndex="quote_status"
                    key="quote_status"
                    width="20%"
                    />
                    <Column
                    title="Validity"
                    dataIndex="quote_validity"
                    key="quote_validity"
                    width="25%"
                    />
                    <Column
                    title="Created"
                    dataIndex="date_created"
                    key="data_created"
                    width="25%"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                            <Link to={`/quotation/${record.quote_id}`}>
                                VIEW
                            </Link>
                            <span className="ant-divider" />
                            <Link onClick={() => this.handleApprove(record.quote_id)} to="#">
                                ACCEPT
                            </Link>
                            <span className="ant-divider" />
                            <Link onClick={() => this.handleReject(record.quote_id)} to="#">
                                REJECT
                            </Link>
                            </span>
                        )}
                    />
                </Table>

                <InvoiceTable data={this.state.invoices} />
            </div>
        );
    }
}

export default Profile;