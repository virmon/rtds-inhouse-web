import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Icon, message, Popconfirm } from 'antd';
import { getJwt } from '../../helpers/jwt';

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

const dummy = [
  {
    "client_name": "Oil My Goodness",
    "projects": 3,
    "quote": 1
  },
  {
    "client_name": "Mashiso",
    "projects": 1,
    "quote": 1
  },
  {
    "client_name": "MCK",
    "projects": 2,
    "quote": 1
  },
];

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
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
    axios.get('https://rtds-api.herokuapp.com/clients').then(response =>{
      this.setState({
        loading: false,
        clients: response.data,
        numberOfRecords: response.data.length
      })
      console.log(response.data);
    })
  }

  render() {
    return(
      <div>
      <h2>Clients</h2>
      <Table bordered dataSource={this.state.clients}>
      {/* <Table bordered dataSource={dummy}> */}
        <Column
          title="Name"
          dataIndex="client_id"
          key="client_id"
          width="30%"
        />
        <Column
          title="Project count"
          dataIndex="client_firstname"
          key="client_firstname"
        />
        <Column
          title="Pending quotations"
          dataIndex="client_lastname"
          key="client_lastname"
        />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>
                <Link to={'/client/id'}>
                    OPEN
                </Link>
                </span>
            )}
          />
        {/* <Column
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
        /> */}
      </Table>
      </div>
    );
  }
}

export default ClientList;