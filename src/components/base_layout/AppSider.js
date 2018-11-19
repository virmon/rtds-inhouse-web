import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class AppSider extends Component {
  render() {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            collapsible
            collapsed={this.props.collapsed}
            onCollapse={this.props.onCollapse}
            >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Favorites</span>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>Patient List</span></span>}
            >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Settings</span></span>}
            >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
                <Icon type="file" />
                <span>Lock</span>
            </Menu.Item>
            </Menu>
        </Sider>
    );
  }
}

export default AppSider;
