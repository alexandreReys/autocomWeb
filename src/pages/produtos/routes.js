export default [
  {
    name: 'produtos',
    path: '/produtos',
    component: () => import(/* webpackChunkName: "produtos" */ './Produtos'),
    meta: {
      showNavbar: true,
      title: 'Produtos',
      icon: 'shopping_cart',
      label: 'Produtos'
    }
  }
]
