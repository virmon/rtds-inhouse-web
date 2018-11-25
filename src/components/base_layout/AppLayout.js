import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import menus from '../../utils/menu';

// import components
import AppHeader from './AppHeader';
import AppBreadcrumb from './AppBreadcrumb';
import AppFooter from './AppFooter';
import Header from './Header/HeaderV2';
import ClientList from '../Clients/ClientList';
import ClientProfile from '../Clients/ClientProfile';
import Dashboard from '../Dashboard/Dashboard';
import Services from '../Packages/Services';
import Accounts from '../Accounts/Accounts';
import AdminForm from '../Forms/AdminForm';
import ClientForm from '../Forms/ClientForm';
import Profile from '../Accounts/Profile';
// import Login from '../Accounts/Login';
import RequestQuotation from '../Forms/RequestQuotation';
import RequestQuoteForm from '../Forms/RequestQuoteForm';
import Form from '../Forms/FormTest';
import NoMatch from '../NoMatch/NoMatch';
import './appLayout.css';
import QuotationDetail from '../Quotations/QuotationDetail';
import ScrollToTop from '../ScrollToTop';
import AuthenticatedComponent from '../AuthenticatedComponent';

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
        <ScrollToTop>
        <div className="wrapper">
          <div className="header">
          {/* <Login isLogin={true} /> */}
            <div className="header-inner">
              {/* <span>Redtomato Design Studio</span> */}
              {/* <img src={logo} alt="logo" width="100px" height="100px" /> */}
            </div>
          </div>
          <div className="nav">
            <Link to='/dashboard' className="nav-item">DASHBOARD</Link>
            <Link to='/clients' className="nav-item">CLIENTS</Link>
            <Link to='/services' className="nav-item">SERVICES</Link>
            <Link to='/accounts/admin' className="nav-item">ACCOUNTS</Link>
            <Link to='/profile' className="nav-item">PROFILE</Link>
            {/* <Link to='/quotations' className="nav-item">QUOTATIONS</Link> */}
            {/* <Link to='/quotations/item' className="nav-item">QUOTATION ITEM</Link> */}
            {/* <Link to='/projects' className="nav-item">PROJECTS</Link> */}
          </div>
          <div className="content">
              <Switch>
                  {/* <Route exact path="/login" component={Login}/> */}
                  {/* <AuthenticatedComponent> */}
                    <Route exact path="/dashboard" component={Dashboard}/>
                  {/* </AuthenticatedComponent> */}
                  
                  <Route exact path="/clients" component={ClientList}/>
                  <Route exact path="/client/:id" component={ClientProfile}/>
                  <Route exact path="/quotation/:id" component={QuotationDetail}/>
                  <Route exact path="/services" component={Services}/>
                  <Route exact path="/accounts/admin" component={Accounts}/>
                  <Route exact path="/accounts/admin/form" component={AdminForm}/>
                  <Route exact path="/accounts/client/form" component={ClientForm}/>
                  <Route exact path="/profile" component={Profile}/>
                  {/* <Route exact path="/request/quotation" component={RequestQuotation}/> */}
                  <Route exact path="/request/quotation" component={Form}/>
                  {/* <Route exact path="/request/quotation/:id" component={ClientForm}/> */}
                  <Route component={NoMatch}/>
              </Switch>
          </div>
          <div className="footer"></div>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default AppLayout;
