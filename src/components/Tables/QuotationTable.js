import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const { Column, ColumnGroup } = Table;
// import dummy from '../../utils/dummy.js';

const dummy =
[
    {
      "quote_no": "12312312",
      "projects": 3,
      "quote": 1
    },
    {
      "quote_no": "Mashiso",
      "projects": 1,
      "quote": 1
    },
    {
      "quote_no": "MCK",
      "projects": 2,
      "quote": 1
    },
];

class QuotationTable extends Component {
    render(){
        return(
            <div>
                {/* <h2>All Quotation</h2> */}
                <Table 
                    bordered 
                    title={() => 'All Quotations'}
                    pagination={false} 
                    scroll={{ y: 300 }} 
                    dataSource={dummy}
                >
                    <Column
                    title="Quotation No."
                    dataIndex="quote_no"
                    key="quote_no"
                    width="30%"
                    />
                    <Column
                    title="Project count"
                    dataIndex="projects"
                    key="projects"
                    />
                    <Column
                    title="Pending quotations"
                    dataIndex="quote"
                    key="quote"
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
                                    INVOICE
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