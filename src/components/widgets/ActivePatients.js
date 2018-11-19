import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, 
  {
    title: 'Category',
    dataIndex: 'cat',
    key: 'cat'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }, 
];

class ActivePatients extends Component {
  constructor() {
    super();

    this.state = {
      patients: []
    }
  }
  componentDidMount() {
    let activePatients = [];
    let data = {patients: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        status: 'ACTIVE'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        status: 'INACTIVE'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        status: 'ACTIVE'
      },
    ]}
    for(let i=0; i<data.patients.length; i++) {
      if(data.patients[i].status === 'ACTIVE') {
        activePatients.push(data.patients[i]);
      }
    }
    this.setState({
      patients: activePatients
    });
  }
  render() {
    return (
      <Table 
        pagination={false} 
        columns={columns} 
        dataSource={this.state.patients} 
        scroll={{ y: 240 }} />
    );
  }
}

export default ActivePatients;