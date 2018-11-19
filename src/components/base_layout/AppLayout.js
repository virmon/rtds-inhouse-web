import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import menus from '../../utils/menu';

// import components
import AppHeader from '../base_layout/AppHeader';
import AppBreadcrumb from '../base_layout/AppBreadcrumb';
import AppFooter from '../base_layout/AppFooter';
import Header from '../base_layout/Header/HeaderV2';
import ProductList from '../Products/ProductList';
import ClientList from '../Products/ClientList';
import QuotationList from '../Quotations/QuotationList';
import ProductForm from '../Forms/ProductForm';
import NoMatch from '../NoMatch/NoMatch';
import './appLayout.css';
import logo from '../../logo.svg';
import QuotationDetail from '../Quotations/QuotationDetail';

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

class AppLayout extends Component {
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
        <div className="wrapper">
          <div className="header">
            <div className="header-inner">
              {/* <span>Redtomato Design Studio</span> */}
              {/* <img src={logo} alt="logo" width="100px" height="100px" /> */}
            </div>
          </div>
          <div className="nav">
            <Link to='/' className="nav-item">DASHBOARD</Link>
            <Link to='/clients' className="nav-item">CLIENTS</Link>
            <Link to='/quotations' className="nav-item">QUOTATIONS</Link>
            <Link to='/projects' className="nav-item">PROJECTS</Link>
          </div>
          <div className="content">
              <Switch>
                  <Route exact path="/" component={NoMatch}/>
                  <Route exact path="/clients" component={ClientList}/>
                  <Route exact path="/quotations" component={QuotationList}/>
                  <Route exact path="/projects" component={QuotationDetail}/>
                  <Route exact path="/services" component={ProductForm}/>
                  <Route exact path="/packages" component={ProductForm}/>
                  <Route component={NoMatch}/>
              </Switch>
          </div>
          <div className="footer"></div>
        </div>
      </Router>
    );
  }
}

export default AppLayout;
