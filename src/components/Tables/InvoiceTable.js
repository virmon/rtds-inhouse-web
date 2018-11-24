import React, { Component } from "react";
import { Table, Icon, message, Popconfirm, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { generatePDF } from "../../utils/pdf";

// import axios from 'axios';

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
  render() {
    return (
      <div>
        {/* <h2>All Invoice</h2> */}
        <Table
          bordered
          title={() => "All Invoice"}
          pagination={false}
          scroll={{ y: 300 }}
          dataSource={dummy}
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
            dataIndex="amount"
            key="amount"
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
                {/* <span className="ant-divider" /> */}
                <Link onClick={() => generatePDF(text)} to="#">
                  Save PDF
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
