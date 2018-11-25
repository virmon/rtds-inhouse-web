import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import QuotationTable from '../Tables/QuotationTable';
import InvoiceTable from '../Tables/InvoiceTable';
import axios from 'axios';

class ClientProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          client: '',
          quotations: [],
          invoices: []
        }
    
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        let pathSnippets = this.props.location.pathname.split('/');
        console.log(pathSnippets[2]);
        axios.get('/api/clients/'+pathSnippets[2]).then(response =>{
            this.setState({
                client: response.data.client[0].company_name,
                quotations: response.data.quotations,
                invoice: response.data.invoices
            })
            // console.log(response.data.invoices);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

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
                <h1>{this.state.client}</h1><br/>
                <QuotationTable data={this.state.quotations}/><br/>
                <InvoiceTable data={this.state.invoices}/>
            </div>
        );
    }
}

export default ClientProfile;