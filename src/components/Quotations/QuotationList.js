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

const dummy = [
  {
      "client_name": "OMG OilMyGoodness",
      "date_created": "Tue, 20 Nov 2018 23:18:09 GMT",
      "generated_id": "72305da7-5bad-4c23-a4a5-4431b3e8920b",
      "is_package": true,
      "last_updated": "Tue, 20 Nov 2018 23:18:09 GMT",
      "package_id": "1",
      "quotation_details": [
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc",
              "price": 1000,
              "qty": 5,
              "quote_id": 2,
              "service_id": 1
          },
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc2",
              "price": 1000,
              "qty": 3,
              "quote_id": 2,
              "service_id": 1
          }
      ],
      "quote_id": 2,
      "quote_status": "For Approval",
      "quote_validity": "Tue, 27 Nov 2018 23:18:09 GMT"
  },
  {
      "client_name": "OMG OilMyGoodness",
      "date_created": "Tue, 20 Nov 2018 23:23:07 GMT",
      "generated_id": "56a7ae53-bae4-47d6-854b-628233696601",
      "is_package": true,
      "last_updated": "Tue, 20 Nov 2018 23:23:07 GMT",
      "package_id": "1",
      "quotation_details": [
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc",
              "price": 1000,
              "qty": 5,
              "quote_id": 3,
              "service_id": 1
          },
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc2",
              "price": 1000,
              "qty": 3,
              "quote_id": 3,
              "service_id": 1
          }
      ],
      "quote_id": 3,
      "quote_status": "For Approval",
      "quote_validity": "Tue, 27 Nov 2018 23:23:07 GMT"
  },
  {
      "client_name": "MCK MCKFlowers",
      "date_created": "Tue, 20 Nov 2018 23:31:09 GMT",
      "generated_id": "978da604-eb9c-4686-8e41-9090ecffb6c9",
      "is_package": true,
      "last_updated": "Tue, 20 Nov 2018 23:31:09 GMT",
      "package_id": "None",
      "quotation_details": [
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc",
              "price": 1000,
              "qty": 5,
              "quote_id": 4,
              "service_id": 1
          },
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc2",
              "price": 1000,
              "qty": 3,
              "quote_id": 4,
              "service_id": 2
          },
          {
              "created_by": "Ragine Tumulak",
              "desc": "sample desc3",
              "price": 10000,
              "qty": 5,
              "quote_id": 4,
              "service_id": 1
          }
      ],
      "quote_id": 4,
      "quote_status": "For Approval",
      "quote_validity": "Tue, 27 Nov 2018 23:31:09 GMT"
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