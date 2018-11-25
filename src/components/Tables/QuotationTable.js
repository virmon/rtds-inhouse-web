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
        this.approve = this.approve.bind(this);
    }

    approve(id) {
        axios.put(`/api/quotation/${id}`).then(response =>{
            console.log('id');
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    createInvoice(id) {
        axios.post(`/api/invoice/${id}`).then(response =>{
            console.log('id');
          })
          .catch(function (error) {
            console.log(error);
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
                    width="20%"
                    />
                    <Column
                    title="Status"
                    dataIndex="quote_status"
                    key="quote_status"
                    width="10%"
                    />
                    <Column
                    title="Validity"
                    dataIndex="quote_validity"
                    key="quote_validity"
                    width="20%"
                    />
                    <Column
                    title="Created"
                    dataIndex="data_created"
                    key="data_created"
                    width="20%"
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
                                <span onClick={() => this.approve(record.quote_id)}>ACCEPT</span>
                            <span className="ant-divider" />
                                {/* <Link to={`/invoice/${record.quote_id}`}> */}
                                    <span onClick={() => this.createInvoice(record.quote_id)}>CREATE INVOICE</span>
                                {/* </Link> */}
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default QuotationTable;