export default [
  {
    name: 'marcas',
    path: '/marcas',
    component: () => import(/* webpackChunkName: "marcas" */ './Marcas'),
    meta: {
      showNavbar: true,
      title: 'Marcas',
      icon: 'store_mall_directory',
      label: 'Marcas'
    }
  }
]
