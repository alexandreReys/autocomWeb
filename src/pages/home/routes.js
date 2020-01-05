export default [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ './Home'),
    meta: {
      showNavbar: true,
      title: 'Home',
      icon: '',
      label: ''
    }
  }
]
