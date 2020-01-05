export default [
  {
    name: 'watchlist',
    path: '/watchlist',
    component: () => import(/* webpackChunkName: "watchlist" */ './Watchlist'),
    meta: {
      showNavbar: false,
      title: 'watchlist',
      icon: 'store_mall_directory',
      label: ''
    }
  }
]
