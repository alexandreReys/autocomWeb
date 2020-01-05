import services from '@/http'
import * as types from './mutation-types'

export const ActionGetMarcas = ({ commit }) => (
  services.marcas.getMarcas().then(res => {
    commit(types.SET_MARCAS, res.data)
  })
)

export const ActionGetMarcasDescricao = ({ commit }, payload) => (
  services.marcas.getMarcasDescricao({ descricao: payload }).then(res => {
    commit(types.SET_MARCAS, res.data)
  })
)

export const ActionPutMarcas = ({ dispatch }, payload) => {
  return services.marcas.putMarcas(payload)
}

export const ActionPostMarcas = ({ dispatch }, payload) => {
  return services.marcas.postMarcas(payload)
}

export const ActionDeleteMarcas = ({ dispatch }, payload) => {
  return services.marcas.deleteMarcas(payload)
}
