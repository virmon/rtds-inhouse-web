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

class AccountsTable extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            accounts: []
        }
    
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        axios.get('/api/accounts/').then(response =>{
            this.setState({
                // services: response.data,
                accounts: response.data.admins
            })
            console.log(response.data.admins);
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
                    title={() => 'List of admins'}
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={this.state.accounts}
                >
                    <Column
                    title="Firstname"
                    dataIndex="admin_firstname"
                    key="admin_firstname"
                    width="20%"
                    />
                    <Column
                    title="Lastname"
                    dataIndex="admin_lastname"
                    key="admin_lastname"
                    width="10%"
                    />
                    <Column
                    title="Email"
                    dataIndex="admin_email"
                    key="admin_email"
                    width="20%"
                    />
                    <Column
                    title="Created"
                    dataIndex="date_created"
                    key="date_created"
                    width="20%"
                    />
                    {/* <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <Link to={'/accounts/admin/form'}>
                                    EDIT
                                </Link>
                            <span className="ant-divider" />
                                <Link to={'/invoice/id'}>
                                    REMOVE
                                </Link>
                            </span>
                        )}
                    /> */}
                </Table>
            </div>
        );
    }
}

export default AccountsTable;