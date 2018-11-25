import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AccountsTable from '../Tables/AccountsTable';
import {Button} from 'antd';

class Accounts extends Component {
    constructor(props) {
        super(props);

        this.createAccount = this.createAccount.bind(this);
    }

    createAccount() {
        console.log("Open form");
    }

    render() {
        return(
            <div>
                <Button type="primary" style={{marginBottom:'20px'}}>
                    <Link to="/accounts/admin/new">Create New Account</Link>
                </Button>
                <AccountsTable />
            </div>
        );
    }
}

export default Accounts;