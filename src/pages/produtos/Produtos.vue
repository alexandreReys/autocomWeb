<template>
  <div class="container-fluid">
    <nav class="mt-3">
      <ol class="breadcrumb font-size14">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Cadastro de Produtos</li>
      </ol>
    </nav>

    <ProdutosCadList
      v-if="moduloAtivo=='Lista'"
      :produtos="produtos"
      @produtosListClick="produtosListClick"
      @btSalvarClick="btSalvarClick"
      @searchTermChanged="searchTermChanged"
    ></ProdutosCadList>

    <ProdutosCadForm
      v-if="moduloAtivo=='Form'"
      :produto="this.produto"
      @btVoltarClick="btVoltarClick"
      @btSalvarClick="btSalvarClick"
    ></ProdutosCadForm>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProdutosCadList from './components/ProdutosCadList.vue'
import ProdutosCadForm from './components/ProdutosCadForm.vue'

export default {
  components: {
    ProdutosCadList,
    ProdutosCadForm
  },
  data () {
    return {
      produto: {
        CadproNetCodigo: '',
        CadproNetDescricao: ''
      },
      moduloAtivo: 'Lista'
    }
  },
  mounted () {
    this.getProdutos()
  },
  computed: {
    ...mapState( 'produtos', ['produtos'] )
  },
  methods: {
    ...mapActions( 'produtos', ['ActionGetProdutos'] ),
    ...mapActions( 'produtos', ['ActionGetProdutosDescricao'] ),

    produtosListClick ( event ) {
      if ( event.moduloAtivar !== this.moduloAtivo ) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.produto = event.produtoSelecionada
    },

    btVoltarClick ( event ) {
      if ( event.moduloAtivar !== this.moduloAtivo ) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getProdutos()
    },

    btSalvarClick ( event ) {
      if ( event.moduloAtivar !== this.moduloAtivo ) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getProdutos()
    },

    getProdutos () {
      this.ActionGetProdutos()
    },

    searchTermChanged ( event ) {
      this.ActionGetProdutosDescricao( event.searchTerm )
    }
  }
}
</script>

<style>
</style>
