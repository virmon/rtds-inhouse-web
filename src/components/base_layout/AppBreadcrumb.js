import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbNameMap = {
  '': 'Dashboard',
  'clients': 'Clients',
  'Quotations': 'Quotations',
  'projects': 'Projects',
  'settings': 'Settings'
};
const AppBreadcrumb = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
    return(
      <Breadcrumb.Item key={url}>
        <Link exact to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link exact to="/">Dashboard</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return(
    <Breadcrumb style={{margin: '16px 0'}}>
      {breadcrumbItems}
    </Breadcrumb>
  );
});
export default AppBreadcrumb;