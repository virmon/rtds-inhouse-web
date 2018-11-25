import React, { Component } from 'react';
import { Form, Input, InputNumber, message, Button, Upload, Icon, Select, Radio } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './requestQuotation.css';
// const FormItem = Form.Item;
// const { TextArea } = Input;
// const Option = Select.Option;
// const RadioButton = Radio.Button;
// const RadioGroup = Radio.Group;

const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
  ];

class RequestQuotation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            service: '',
            quoteItems: {},
            quoteDetail: []
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        console.log(event.target);
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        // const { setFieldsValue } = this.props.form;
        // const { formLayout } = this.state;
        // const formItemLayout = formLayout === 'horizontal' ? {
        //   labelCol: { span: 4 },
        //   wrapperCol: { span: 14 },
        // } : null;
        // const buttonItemLayout = formLayout === 'horizontal' ? {
        //   wrapperCol: { span: 14, offset: 4 },
        // } : null;
        return(
            <Router>
                <div>
                    <div className="container">
                        <Link to="/request/quotation/branding">
                            <div className="services" onClick={this.handleInput}>
                                Branding
                            </div>
                        </Link>
                        <Link to="/request/quotation/photography">
                            <div className="services" onClick={this.handleInput}>
                                Photography
                            </div>
                        </Link>
                        <Link to="/request/quotation/graphic-design">
                            <div className="services" onClick={this.handleInput}>
                                Graphic Design
                            </div>
                        </Link>
                        <input type="text" value={this.state.service} />
                    </div>
                    {/* <FormItem
                        label="Feature"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('features')(
                            <TextArea placeholder="Product Feature" autosize />
                        )
                        }
                    </FormItem> */}
                    {/* <Route exact path="/request/quotation/branding" component={Branding} /> */}
                    {/* <Route path="/request/quotation/photography" component={Photography} /> */}
                    <Route path="/request/quotation/graphic-design" component={GraphicDesign} />
                </div>
            </Router>
        );
    }
}

// function Branding({ match }) {
//     return (
//         <div>
//             <h2>Types</h2>
//             <div className="container">
//                 <Link to={`${match.url}/rendering`}><div className="service-type">Layout Design</div></Link>
//                 <Link to={`${match.url}/components`}><div className="service-type">Collaterals</div></Link>
//             </div>
//             <Route path={`${match.path}/:topicId`} component={Topic} />
//             <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
//   }
  
//   function Photography({ match }) {
//     return (
//         <div>
//             <h2>Types</h2>
//             <div className="container">
//                 <Link to={`${match.url}/rendering`}><div className="service-type">Layout Design</div></Link>
//                 <Link to={`${match.url}/props-v-state`}><div className="service-type">Stickers</div></Link>
//             </div>
//             <Route path={`${match.path}/:topicId`} component={Topic} />
//             <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
//   }

function GraphicDesign({ match }) {
    return (
      <div>
        <h2>Types</h2>
        <div className="container">
            <Link to={`${match.url}/layout`}><div className="service-type">Layout Design</div></Link>
            <Link to={`${match.url}/collaterals`}><div className="service-type">Collaterals</div></Link>
            <Link to={`${match.url}/stickers`}><div className="service-type">Stickers</div></Link>
        </div>
        <Route path={`${match.path}/:typeId`} component={ServiceType} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a type of service.</h3>}
        />
      </div>
    );
}

function ServiceType({ match }) {
    return (
      <div>
        <h3>{match.params.typeId}</h3>
        <h3>qty</h3>
        <h3>price</h3>
        <h3>requirements</h3>
        <Button type="primary" style={{marginBottom:'20px'}}>
            <Link to={`/request/quotation`}>Add</Link>
        </Button>
      </div>
    );
}

const WrappedForm = Form.create()(RequestQuotation);

export default WrappedForm;