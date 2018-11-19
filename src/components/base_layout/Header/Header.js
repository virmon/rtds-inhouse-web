import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
// import SearchBox from '../../Search/SearchBox';
import logo from '../../../logo.svg';
import './Header.css';
import './SideNav.css';

const menus = module.export = [
  {
    key: '2.1',
    name: 'All',
    path: '/catalog'
  },
  {
    key: '2.2',
    name: 'Accessories',
    path: '/accessories'
  },
  {
    key: '2.3',
    name: 'Bags',
    path: '/bags'
  },
  {
    key: '2.4',
    name: 'Makeup',
    path: '/makeups'
  },
  {
    key: '2.5',
    name: 'Skincare',
    path: '/skincare'
  },
  {
    key: '2.6',
    name: 'Clothes',
    path: '/clothes'
  },
  {
    key: '2.7',
    name: 'Shoes',
    path: '/shoes'
  },
  {
    key: '2.8',
    name: 'Others',
    path: '/others'
  },
  {
    key: '2.9',
    name: 'BrandNew',
    path: '/brand_new'
  },
  {
    key: '3.0',
    name: 'Preloved',
    path: '/preloved'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topMargin: 0,
      icon: 'search',
      leftMargin: '-1000px',
      backdrop: 'none'
    };
  }
  triggerSearch() {
    if(this.state.topMargin === 0) {
      this.setState({topMargin: '69px', icon: 'cross'})
    } else {
      this.setState({topMargin: 0, icon: 'search'})
    }
    // console.log(this.state.topMargin);
  }
  closeSideNav() {
    this.setState({leftMargin:'-1000px', backdrop: 'none'});
  }
  render() {
    // console.log(window.scrollTo(0, 0));
    // http://inddc.in/webroot/assets/img/sample/shortcode/logo/1.png
    return(
      <div className="">
        <div className="header-container">
          <div className="inner-header-side" onClick={() => this.setState({leftMargin:'0px', backdrop: 'block'})}>
            <Icon type="bars" style={{ fontSize: 30 }} />
          </div>
          <div className="inner-header-center">
            <img alt="Logo" src={logo} width="120px" height="50px" />
          </div>
          <div className="inner-header-side" onClick={this.triggerSearch.bind(this)} style={{visibility: 'hidden'}}>
            <Icon type={this.state.icon} style={{ fontSize: 30 }} />
          </div>
        </div>
        {/* <div className="search-container" style={{marginTop: this.state.topMargin}}>
          <SearchBox className="" />
        </div> */}
        <div className="sidenav-container" style={{marginLeft: this.state.leftMargin}}>
          <div className="sidenav-item">
            <div className="inner-sidenav-item"></div>
            <div className="inner-sidenav-item" onClick={() => this.closeSideNav()}>
              <Icon type="cross" style={{ fontSize: 30 }} className="cross"/>
            </div>
          </div>
          <Link to='/' className="sidenav-item" onClick={() => this.closeSideNav()}>HOME</Link>
          <Link to='/mode_of_payment' className="sidenav-item" onClick={() => this.closeSideNav()}>HOW TO ORDER</Link>
          <Link to='/credits' className="sidenav-item" onClick={() => this.closeSideNav()}>CONTACT US</Link>
          <Link to='/credits' className="sidenav-item" onClick={() => this.closeSideNav()}>CREDITS</Link>
        </div>
        <div className="backdrop" onClick={() => this.closeSideNav()} style={{display:this.state.backdrop}}></div>
      </div>
    );
  }
}

export class Navigation extends Component {
  render() {
    return(
      <div>
        <div className="navigation-container inner-header-side">
          {
            menus.map((menu) =>
              <div key={menu.key} className="nav-item">
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Header;
