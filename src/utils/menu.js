const menus = module.export = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      path: '',
      icon: 'line-chart',
      click: true,
    },
    {
        key: 'favorites',
        name: 'Favorites',
        icon: 'star-o',
        click: false,
        child: [
            {
                key: 'active_patients',
                name: 'Active Patients',
                path: 'active_patients'
            },
            {
                key: 'statistics',
                name: 'Statistics',
                path: 'statistics'
            }
        ]
    },
    {
        key: 'patients',
        name: 'Patient List',
        path: 'list',
        icon: 'user',
        click: true,
    }
  ]