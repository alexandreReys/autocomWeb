import store from '../store'

export default req => {
  req.params['idEmpresa'] = store.state.auth.user.empresa

  return ({ status }) => {
    if (status === 401) {
      store.dispatch('auth/ActionSignOut')
      window._Vue.$router.push({ name: 'login' })
    }
  }
}
