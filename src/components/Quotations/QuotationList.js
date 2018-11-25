import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Icon, message, Popconfirm } from 'antd';

const { Column, ColumnGroup } = Table;

class QuotationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
      numberOfRecords: 0
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(key) {
    console.log(key);
  }

  componentDidMount() {
    axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
      // console.log(response.data);
      this.setState({
        loading: false,
        products: response.data,
        numberOfRecords: response.data.length
      })
    })
  }

  render() {
    return(
        <div>
        <h2>Quotations</h2>
        {/* <Table bordered dataSource={this.state.products}> */}
        <Table bordered dataSource={dummy}>
            <Column
            title="Client"
            dataIndex="client_name"
            key="client_name"
            width="30%"
            />
            <Column
            title="Status"
            dataIndex="quote_status"
            key="quote_status"
            />
            <Column
            title="Validity"
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

export default QuotationList;