import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, message, Popconfirm } from 'antd';

const { Column, ColumnGroup } = Table;

const dummy = [
    {
        "client_name": "Branding",
        "date_created": "Tue, 20 Nov 2018 23:18:09 GMT",
        "generated_id": "72305da7-5bad-4c23-a4a5-4431b3e8920b",
        "is_package": true,
        "last_updated": "Tue, 20 Nov 2018 23:18:09 GMT",
        "package_id": "1",
        "quotation_details": [
            {
                "created_by": "Ragine Tumulak",
                "desc": "sample desc",
                "price": 1000,
                "qty": 5,
                "quote_id": 2,
                "service_id": 1
            },
            {
                "created_by": "Ragine Tumulak",
                "desc": "sample desc2",
                "price": 1000,
                "qty": 3,
                "quote_id": 2,
                "service_id": 1
            }
        ],
        "quote_id": 2,
        "quote_status": "For Approval",
        "quote_validity": "Tue, 27 Nov 2018 23:18:09 GMT"
    }
];

class Services extends Component {
    render() {
        return(
            <div>
                <h2>Services</h2>
                {/* <Table bordered dataSource={this.state.products}> */}
                <Table bordered dataSource={dummy}>
                    <Column
                    title="Service"
                    dataIndex="client_name"
                    key="client_name"
                    width="30%"
                    />
                    <Column
                    title="Description"
                    dataIndex="quote_status"
                    key="quote_status"
                    />
                    <Column
                    title="Price"
                    dataIndex="quote_validity"
                    key="quote_validity"
                    />
                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                        <Link to={'/form/'+record.id}>
                            OPEN
                        </Link>
                        </span>
                    )}
                    />
                </Table>
            </div>
        );
    }
}

export default Services;