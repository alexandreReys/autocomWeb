export default [
  {
    name: 'tipos',
    path: '/tipos',
    component: () => import(/* webpackChunkName: "tipos" */ './Tipos'),
    meta: {
      showNavbar: true,
      title: 'Tipos',
      icon: 'store_mall_directory',
      label: 'Tipos'
    }
  }
]
