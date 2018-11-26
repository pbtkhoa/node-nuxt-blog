const Menu = [
  { header: 'Apps' },
  {
    title: 'Posts',
    group: 'post',
    icon: 'create',
    items: [
      { name: 'post-create', title: 'Add new' },
      { name: 'post-list', title: 'All posts' },
      { name: 'post-category', title: 'Categories' }
    ]
  },
  { header: 'Settings' },
  {
    title: 'Profile',
    icon: 'person',
    name: 'settings-user'
  }
];

export default Menu;
