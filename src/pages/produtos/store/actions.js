import services from '@/http'
import * as types from './mutation-types'

export const ActionGetProdutos = ({ commit }) => (
  services.produtos.getProdutos().then(res => {
    commit(types.SET_PRODUTOS, res.data)
  })
)

export const ActionGetProdutosDescricao = ({ commit }, payload) => (
  services.produtos.getProdutosDescricao({ descricao: payload }).then(res => {
    commit(types.SET_PRODUTOS, res.data)
  })
)

export const ActionPutProdutos = ({ dispatch }, payload) => {
  return services.produtos.putProdutos(payload)
}

export const ActionPostProdutos = ({ dispatch }, payload) => {
  return services.produtos.postProdutos(payload)
}

export const ActionDeleteProdutos = ({ dispatch }, payload) => {
  return services.produtos.deleteProdutos(payload)
}
