import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
// import axios from 'axios';

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

class AccountsTable extends Component {
    render(){
        return(
            <div>
                {/* <h2>All Quotation</h2> */}
                <Table 
                    bordered 
                    title={() => 'List of admins'}
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={dummy}
                >
                    <Column
                    title="Name"
                    dataIndex="quote_no"
                    key="quote_no"
                    width="20%"
                    />
                    <Column
                    title="Email"
                    dataIndex="status"
                    key="status"
                    width="10%"
                    />
                    <Column
                    title="Contact"
                    dataIndex="validity"
                    key="validity"
                    width="20%"
                    />
                    <Column
                    title="Created"
                    dataIndex="date_created"
                    key="date_created"
                    width="20%"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                            <Link to={'/quotations/id'}>
                                VIEW
                            </Link>
                            <span className="ant-divider" />
                                <Link to={'/invoice/id'}>
                                    EDIT
                                </Link>
                            <span className="ant-divider" />
                                <Link to={'/invoice/id'}>
                                    REMOVE
                                </Link>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default AccountsTable;