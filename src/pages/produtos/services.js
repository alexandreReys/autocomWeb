export default {
  getProdutos: { method: 'get', url: 'produtos' },
  getProdutosDescricao: { method: 'get', url: 'produtos{/descricao}' },
  putProdutos: { method: 'put', url: 'produtos' },
  postProdutos: { method: 'post', url: 'produtos' },
  deleteProdutos: { method: 'delete', url: 'produtos' }
}
