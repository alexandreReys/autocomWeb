import * as types from './mutation-types'

export default {
  [types.SET_MARCAS] (state, payload) {
    state.marcas = payload
  }
}
