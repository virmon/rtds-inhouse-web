import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Icon, message, Popconfirm } from 'antd';

const { Column, ColumnGroup } = Table;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Date Modified',
    dataIndex: 'dateMod',
    key: 'dateMod'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Icon type="edit" onClick={() => console.log('edit')} style={{color: '#6699cc', cursor: 'pointer'}} />
        <span className="ant-divider" />
        <Icon type="delete" onClick={() => console.log('delete')} style={{color: '#cc6666', cursor: 'pointer'}} />
      </span>
    ),
  }
];

class QuotationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
      numberOfRecords: 0
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(key) {
    console.log(key);
  }

  handleDelete(key) {
    axios.delete(`https://pure-harbor-18418.herokuapp.com/products/${key}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          loading: true
        })
        axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
          this.setState({
            loading: false,
            products: response.data,
          })
        })
        message.success('Successfully Deleted');
    })
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
        <Table bordered dataSource={this.state.products}>
            <Column
            title="Name"
            dataIndex="name"
            key="name"
            width="30%"
            />
            <Column
            title="Status"
            dataIndex="status"
            key="status"
            />
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>
                <Link to={'/form/'+record.id}>
                    <Icon type="edit" style={{color: '#6699cc', cursor: 'pointer'}} />
                </Link>
                <span className="ant-divider" />
                <Popconfirm title="Are you sure delete this item?" onConfirm={() => this.handleDelete(record.id)} okText="Yes" cancelText="No">
                    <Icon type="delete" style={{color: '#cc6666', cursor: 'pointer'}} />
                </Popconfirm>
                </span>
            )}
            />
        </Table>
        </div>
    );
  }
}

export default QuotationList;