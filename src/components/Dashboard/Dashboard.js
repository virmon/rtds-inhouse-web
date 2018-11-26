import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';
import axios from 'axios';
import Nav from '../base_layout/Nav';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            less_tax: 0,
            most_availed_service: '',
            most_reccuring_costumer: '',
            net_sales: 0,
            total_sales: 0
        }
    }
    componentDidMount() {
        axios.get('/api/dashboard').then(response =>{
            this.setState({
                less_tax: response.data.less_tax,
                most_availed_service: response.data.most_availed_service,
                most_reccuring_costumer: response.data.most_reccuring_costumer,
                net_sales: response.data.net_sales,
                total_sales: response.data.total_sales
            })
            console.log(response.data.less_tax);
          })
          .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <Nav />
                <h2>Dashboard</h2>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="MOST AVAILED SERVICE" bordered={false}>{this.state.most_availed_service}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="MOST RECCURING CUSTOMER" bordered={false}>{this.state.most_reccuring_costumer}</Card>
                    </Col>
                    <Col span={8}>
                        {/* <Card title="TOTAL SALES" bordered={false}>20</Card> */}
                    </Col>
                </Row><br/>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="TOTAL SALES" bordered={false}>{this.state.total_sales}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="LESS TAX" bordered={false}>{this.state.less_tax}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="NET SALES" bordered={false}>{this.state.net_sales}</Card>
                    </Col>
                </Row><br/>
            </div>
        );
    }
}

export default Dashboard;