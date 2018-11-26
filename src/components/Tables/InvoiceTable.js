import React, { Component } from "react";
import { Table, Icon, message, Popconfirm, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { generatePDF } from "../../utils/pdf";

import axios from 'axios';

const { Column, ColumnGroup } = Table;
// import dummy from '../../utils/dummy.js';

const dummy = [
  {
    "invoice_no": "111222333",
    "status": "Paid",
    "amount": "10,000",
    "date_created": "10-01-18"
  },
  {
    "invoice_no": "123123123",
    "status": "Unpaid",
    "amount": "10,000",
    "date_created": "10-01-18"
  },
  {
    "invoice_no": "333111222",
    "status": "Cancelled",
    "amount": "10,000",
    "date_created": "10-01-18"
  },
];

class InvoiceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // invoices: [],
        key: localStorage.getItem('public-id')
    };

    this.checkPaid = this.checkPaid.bind(this);

    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

//   handleEdit(key) {
//     console.log(key);
//   }

  // componentDidMount() {
  //     let pathSnippets = this.props.location.pathname.split('/');
  //     console.log(pathSnippets[2]);
  //     axios.get(``).then(response =>{
  //         this.setState({
  //             company_name: response.data.client[0].company_name,
  //             invoices: response.data.invoices[0].company_name,
  //             quoteDetail: response.data
  //         })
  //         console.log(response.data.invoices);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })
  // }

  checkPaid(id) {
      axios.put(`/api/invoice/${id}`).then(response =>{
          this.successReject();
        })
        .catch(function (error) {
          console.log(error);
          this.errorReject();
      })
  }

  successReject = () => {
    message.success('Updated Successfully', 10);
  };

  errorReject = () => {
    message.error('Could not be updated', 10);
  };

  render() {
    return (
      <div>
        {/* <h2>All Invoice</h2> */}
        <Table
          bordered
          title={() => "All Invoice"}
          pagination={false}
          scroll={{ y: 300 }}
          dataSource={this.props.data}
        >
          <Column
            title="Invoice No."
            dataIndex="invoice_no"
            key="invoice_no"
            width="20%"
          />
          <Column
            title="Status"
            dataIndex="status"
            key="status"
            width="10%"
          />
            <Column
            title="Amount in Php"
            dataIndex="total_price"
            key="total_price"
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
                <Link onClick={() => generatePDF(text)} to="#">
                  Save PDF
                </Link>
                <span className="ant-divider" />
                <Link onClick={() => this.checkPaid(record.invoice_id)} to="#">
                  Paid
                </Link>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}

export default InvoiceTable;
