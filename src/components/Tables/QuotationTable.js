import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Column, ColumnGroup } = Table;
// import dummy from '../../utils/dummy.js';

const dummy =
[
    {
        "quote_no": "111222333",
        "status": "Expired",
        "validity": "11-01-18",
        "date_created": "10-01-18"
    },
    {
        "quote_no": "123123123",
        "status": "For Approval",
        "validity": "11-01-18",
        "date_created": "10-01-18"
    },
    {
        "quote_no": "333111222",
        "status": "In Progress",
        "validity": "11-01-18",
        "date_created": "10-01-18"
    },
];

class QuotationTable extends Component {
    constructor(props) {
        super(props);

        this.createInvoice = this.createInvoice.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
    }

    handleApprove(id) {
        axios.put(`/api/quotation/${id}`).then(response =>{
            console.log(`admin approved quotation #(${id})`);
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

    success = () => {
        message.success('Approved Successfully', 10);
    };

    successInvoice = () => {
        message.success('Approved Successfully', 10);
    };
  
    error = () => {
        message.error('Could not be approved.', 10);
    };

    errorInvoice = () => {
        message.error('Could not create invoice.', 10);
    };

    successReject = () => {
        message.success('Rejected Successfully', 10);
    };
  
    errorReject = () => {
        message.error('Could not be rejected.', 10);
    };

    createInvoice(id) {
        axios.post(`/api/invoice/${id}`).then(response =>{
            console.log('id');
            this.successInvoice();
        })
        .catch(function (error) {
            console.log(error);
            this.errorInvoice();
        })
    }

    render(){
        return(
            <div>
                {/* <h2>All Quotation</h2> */}
                <Table 
                    bordered 
                    title={() => 'All Quotations'}
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={this.props.data}
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
                    dataIndex="data_created"
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
                                {/* <Link to={'/invoice/id'}>
                                    ACCEPT
                                </Link> */}
                                <Link onClick={() => this.handleApprove(record.quote_id)} to="#">
                                    ACCEPT
                                </Link>
                            <span className="ant-divider" />
                                <Link onClick={() => this.handleReject(record.quote_id)} to="#">
                                    Reject
                                </Link>
                            <span className="ant-divider" />
                                <Link onClick={() => this.createInvoice(record.quote_id)} to="#">
                                    Create invoice
                                </Link>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default QuotationTable;