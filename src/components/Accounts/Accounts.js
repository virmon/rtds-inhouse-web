import React, { Component } from 'react';
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
                <Button type="primary" onClick={this.createAccount} style={{marginBottom:'20px'}}>Create New Account</Button>
                <AccountsTable />
            </div>
        );
    }
}

export default Accounts;