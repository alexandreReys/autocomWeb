import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser', res.data)
    dispatch('ActionSetUserEmpresa', res.data.empresa)
    dispatch('ActionSetToken', res.data.token)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetUserEmpresa = ({ commit }, payload) => {
  commit(types.SET_USER_EMPRESA, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }
  const token = storage.getLocalToken()
  if (!token) {
    return Promise.reject(new Error('Token invalido!'))
  }
  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch, state }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { user } } = await services.auth.loadSession()
      let userAux = {
        name: user.name,
        email: user.sub,
        empresa: user.empresa,
        empresaRazaoSocial: user.empresaRazaoSocial,
        token: state.token
      }
      dispatch('ActionSetUser', userAux)
      dispatch('ActionSetUserEmpresa', user.name)
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()

  dispatch('ActionSetUser', {})
  dispatch('ActionSetUserEmpresa', '')
  dispatch('ActionSetToken', '')
}
