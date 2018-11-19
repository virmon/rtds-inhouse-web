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
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty'
  }, 
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }, 
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    cat: 'bags',
    qty: 1,
    price: 1000,
    status: 'Brand New'
  }, 
  {
    key: '2',
    name: 'Jim Green',
    cat: 'bags',
    qty: 1,
    price: 1000,
    status: 'Brand New'
  }, 
  {
    key: '3',
    name: 'Joe Black',
    cat: 'bags',
    qty: 1,
    price: 1000,
    status: 'Brand New'
  }
];

class StagingList extends Component {
    render() {
        return(
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default StagingList;