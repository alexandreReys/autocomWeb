export default {
  getTipos: { method: 'get', url: 'tipos' },
  getTiposDescricao: { method: 'get', url: 'tipos{/descricao}' },
  putTipos: { method: 'put', url: 'tipos' },
  postTipos: { method: 'post', url: 'tipos' },
  deleteTipos: { method: 'delete', url: 'tipos' }
}
