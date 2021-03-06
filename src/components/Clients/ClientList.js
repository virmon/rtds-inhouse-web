import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'antd';
// import { getJwt } from '../../helpers/jwt';
import SearchBox from '../Search/SearchBox';
import Nav from '../base_layout/Nav';
// import dummy_qs from '../../utils/dummy_qs';

const { Column, ColumnGroup } = Table;

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      clients: [],
      loading: true,
      numberOfRecords: 0
    };

    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // handleEdit(key) {
  //   console.log(key);
  // }

  // handleDelete(key) {
  //   axios.delete(`/${key}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       this.setState({
  //         loading: true
  //       })
  //       axios.get('').then(response =>{
  //         this.setState({
  //           loading: false,
  //           clients: response.data,
  //         })
  //       })
  //       message.success('Successfully Deleted');
  //   })
  // }

  componentDidMount() {
    axios.get('/api/clients/').then(response =>{
      this.setState({
        loading: false,
        clients: response.data.clients,
        numberOfRecords: response.data.clients.length
      })
      console.log(response.data.clients);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // updates search for every keypress
  handleSearch(event) {
    // console.log(event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  render() {
    // filter search results
    let filteredResults = this.state.clients.filter((client) => {
      var found = client.company_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      return found;
    });
    return(
      <div>
        <Nav />
      <h2>Clients</h2>
      {/* <Button type="primary" style={{marginBottom:'20px'}}>
          <Link to="/accounts/client/form">Add New Client</Link>
      </Button> */}
      <SearchBox triggerSearch={this.handleSearch} />
      {/* <Table bordered dataSource={this.state.clients}> */}
      {/* <Table bordered dataSource={dummy}> */}
      <Table bordered dataSource={filteredResults}>
        <Column
          title="Client"
          dataIndex="company_name"
          key="company_name"
          width="30%"
        />
        <Column
          title="Mobile No."
          dataIndex="client_mobile"
          key="client_mobile"
        />
        <Column
          title="Email"
          dataIndex="client_email"
          key="client_email"
        />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>
                <Link to={`/client/${record.public_id}`}>
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