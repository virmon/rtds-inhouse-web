import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, message, Popconfirm } from 'antd';
import axios from 'axios';
import Nav from '../base_layout/Nav';

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
    constructor(props) {
        super(props);
    
        this.state = {
            // service_name: '',
            // service_cat: '',
            // base_price: 0
            services: []
        }
    
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        axios.get('/api/services/').then(response =>{
            this.setState({
                services: response.data.services,
                // service_name: response.data.service_name,
                // service_cat: response.data.cat,
                // base_price: response.data.base_price
            })
            console.log(response.data.services);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render() {
        // console.log(this.state.services);
        return(
            <div>
                <Nav/>
                <h2>Services</h2>
                <Table bordered dataSource={this.state.services}>
                {/* <Table bordered dataSource={dummy}> */}
                    <Column
                    title="Service"
                    dataIndex="service_name"
                    key="service_name"
                    width="30%"
                    />
                    <Column
                    title="Description"
                    dataIndex="service_cat"
                    key="service_cat"
                    />
                    <Column
                    title="Price"
                    dataIndex="base_price"
                    key="base_price"
                    />
                    {/* <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                        <Link to={'/form/'+record.id}>
                            OPEN
                        </Link>
                        </span>
                    )}
                    /> */}
                </Table>
            </div>
        );
    }
}

export default Services;