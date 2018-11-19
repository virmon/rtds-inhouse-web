import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

class AppHeader extends Component {
    render() {
        return(
            <Header className="header">
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <nav className="navbar">
                    <div className="logo">
                        <span style={{padding: '15px'}}><Icon type="api" style={{ fontSize: 20, color: '#08c' }} /> Product Catalog</span>
                    </div>
                </nav>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;
