import * as types from './mutation-types'

export default {
  [types.SET_PRODUTOS] (state, payload) {
    state.produtos = payload
  }
}
