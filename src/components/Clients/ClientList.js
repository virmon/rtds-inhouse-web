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

    const jwt = getJwt();
    console.log(jwt);
    
      // if(!jwt) {
      //     this.props.history.push('/');
      // }
    axios.get('https://rtds-api-brian.herokuapp.com/clients', {headers: {Authorization: `Bearer ${jwt}`} }).then(response =>{
      this.setState({
        loading: false,
        clients: response.data.clients[0],
        numberOfRecords: response.data.length
      })
      console.log(response.data.clients[0]);
    })
  }

  render() {
    return(
      <div>
      <h2>Clients</h2>
      <Table bordered dataSource={this.state.products}>
      {/* <Table bordered dataSource={dummy}> */}
        <Column
          title="Name"
          dataIndex="client_name"
          key="client_name"
          width="30%"
        />
        <Column
          title="Project count"
          dataIndex="projects"
          key="projects"
        />
        <Column
          title="Pending quotations"
          dataIndex="quote"
          key="quote"
        />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>
                <Link to={'/quotations/item'}>
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