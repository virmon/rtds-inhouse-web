import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import menus from '../../utils/menu';

// import components
import Profile from '../Accounts/Profile';
import NoMatch from '../NoMatch/NoMatch';
import '../base_layout/appLayout.css';
import ScrollToTop from '../ScrollToTop';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menus = module.export = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '',
    icon: 'line-chart',
    click: true,
  },
  {
    key: 'new',
    name: 'Product Form',
    path: 'form',
    icon: 'plus-circle-o',
    click: true
  },
  {
      key: 'list',
      name: 'Product List',
      path: 'list',
      icon: 'database',
      click: true
  },
  {
    key: 'settings',
    name: 'Settings',
    path: 'settings',
    icon: 'setting',
    click: true
}
];

class ClientApp extends Component {
  state = {
    collapsed: false,
  };
  
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  }

  getSiderMenu(key, name, icon, path, click, child) {
      if(!click){
        return(
            <SubMenu
              key={key}
              title={<span><Icon type={icon} /><span>{name}</span></span>}
            >
            {
              child.map((item) =>
                <Menu.Item key={item.key}>
                  <Link exact to={"/"+item.path}>
                    {item.name}
                  </Link>
                </Menu.Item>
              )
            }
            </SubMenu>
        );
        } else {
          return(
              <Menu.Item key={key}>
                <Link exact to={"/"+path}>
                <Icon type={icon} />
                <span>{name}</span>
                </Link>
              </Menu.Item>
          );
        }
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
        <div className="wrapper">
          <div className="header">
          {/* <Login isLogin={true} /> */}
            <div className="header-inner">
              {/* <span>Redtomato Design Studio</span> */}
              {/* <img src={logo} alt="logo" width="100px" height="100px" /> */}
            </div>
          </div>
          <div className="content">
              <Profile />
          </div>
          <div className="footer"></div>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default ClientApp;
