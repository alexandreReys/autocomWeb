import services from '@/http'
import * as types from './mutation-types'

export const ActionGetTipos = ({ commit }) => (
  services.tipos.getTipos().then(res => {
    commit(types.SET_TIPOS, res.data)
  })
)

export const ActionGetTiposDescricao = ({ commit }, payload) => (
  services.tipos.getTiposDescricao({ descricao: payload }).then(res => {
    commit(types.SET_TIPOS, res.data)
  })
)

export const ActionPutTipos = ({ dispatch }, payload) => {
  return services.tipos.putTipos(payload)
}

export const ActionPostTipos = ({ dispatch }, payload) => {
  return services.tipos.postTipos(payload)
}

export const ActionDeleteTipos = ({ dispatch }, payload) => {
  return services.tipos.deleteTipos(payload)
}
