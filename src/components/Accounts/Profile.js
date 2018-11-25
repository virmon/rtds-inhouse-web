import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ClientProfile from '../Clients/ClientProfile';
import {Button} from 'antd';

class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <Button type="primary" style={{marginBottom:'20px'}}>
                    <Link to="/request/quotation">Request Quotation</Link>
                </Button>
                <ClientProfile />
            </div>
        );
    }
}

export default Profile;