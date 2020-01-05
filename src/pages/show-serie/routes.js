export default [
  {
    name: 'show-serie',
    path: '/serie/:id',
    component: () => import(/* webpackChunkName: "show-serie" */ './ShowSerie')
  }
]
