import React, { Component } from 'react';
import { Table, Icon, message, Popconfirm, Card, Col, Row } from 'antd';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h2>Dashboard</h2>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="ONGOING PROJECTS" bordered={false}>10</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="ACCOMPLISHED PROJECTS" bordered={false}>50</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="NO. OF CLIENTS" bordered={false}>20</Card>
                    </Col>
                </Row><br/>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="TOTAL SALES" bordered={false}>600,000</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="LESS TAX" bordered={false}>100,000</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="NET INCOME" bordered={false}>500,000</Card>
                    </Col>
                </Row><br/>
            </div>
        );
    }
}

export default Dashboard;