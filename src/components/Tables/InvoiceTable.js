import React, { Component } from "react";
import { Table, Icon, message, Popconfirm, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { generatePDF } from "../../utils/pdf";

// import axios from 'axios';

const { Column, ColumnGroup } = Table;
// import dummy from '../../utils/dummy.js';

const dummy = [
  {
    invoice_no: "231312",
    projects: 3,
    quote: 1
  },
  {
    invoice_no: "Mashiso",
    projects: 1,
    quote: 1
  },
  {
    invoice_no: "MCK",
    projects: 2,
    quote: 1
  }
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
            width="30%"
          />
          <Column title="Project count" dataIndex="projects" key="projects" />
          <Column title="Pending quotations" dataIndex="quote" key="quote" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <Link to={"/invoice/id"}>VIEW</Link>
                <span className="ant-divider" />
                <Link onClick={() => generatePDF(text)} to="#">
                  PDF
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
