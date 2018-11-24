import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import QuotationTable from '../Tables/QuotationTable';
import InvoiceTable from '../Tables/InvoiceTable';

class ClientProfile extends Component {
    render() {
        return(
            <div>
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
                <h1>Oil My Goodness</h1><br/>
                <QuotationTable /><br/>
                <InvoiceTable />
            </div>
        );
    }
}

export default ClientProfile;