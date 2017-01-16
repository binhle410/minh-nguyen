export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'principal',
        data: {
          menu: {
            title: 'Principal',
            icon: 'fa fa-id-card-o',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'dashboard',
            data: {
              menu: {
                title: 'Dashboard',
              }
            }
          },
          {
            path: 'company',
            data: {
              menu: {
                title: 'Company',
              }
            }
          },
          {
            path: 'vouchers',
            data: {
              menu: {
                title: 'Vouchers',
              }
            }
          },
          {
            path: 'consumers',
            data: {
              menu: {
                title: 'Consumers',
              }
            }
          },
          {
            path: 'channel-partner',
            data: {
              menu: {
                title: 'Channel Partner',
              }
            }
          },
          {
            path: 'channel-sale-partner',
            data: {
              menu: {
                title: 'Channel Sale Partner',
              }
            }
          },
          {
            path: 'products',
            data: {
              menu: {
                title: 'Products',
              }
            }
          },
          {
            path: 'clinics',
            data: {
              menu: {
                title: 'Clinics',
              }
            }
          }
        ]
      },
      {
        path: 'channel-partner',
        data: {
          menu: {
            title: 'Channel Partner',
            icon: 'fa fa-id-card-o',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          },
          {
            path: 'orders',
            data: {
              menu: {
                title: 'Orders',
              }
            }
          }
        ]
      },
      {
        path: 'channel-sale-partner',
        data: {
          menu: {
            title: 'Channel Sale Partner',
            icon: 'fa fa-id-card-o',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          },
          {
            path: 'sale-account',
            data: {
              menu: {
                title: 'Channel Sale Account Manager',
              }
            }
          }
        ]
      },
  
    ]
  }
];
