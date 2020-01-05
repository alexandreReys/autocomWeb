<template>
  <div class="container-fluid">
    <nav class="mt-3">
      <ol class="breadcrumb font-size14">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active">Cadastro de Marcas</li>
      </ol>
    </nav>

    <MarcasCadList v-if="moduloAtivo=='Lista'"
      :marcas="marcas"
      @marcasListClick="marcasListClick"
      @btSalvarClick="btSalvarClick"
      @searchTermChanged="searchTermChanged">
    </MarcasCadList>

    <MarcasCadForm v-if="moduloAtivo=='Form'"
      :marca="this.marca"
        @btVoltarClick="btVoltarClick"
        @btSalvarClick="btSalvarClick">
    </MarcasCadForm>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MarcasCadList from './components/MarcasCadList.vue'
import MarcasCadForm from './components/MarcasCadForm.vue'

export default {
  components: {
    MarcasCadList,
    MarcasCadForm
  },
  data () {
    return {
      marca: {
        Class1NetCodigo: '',
        Class1NetDescricao: ''
      },
      moduloAtivo: 'Lista'
    }
  },
  mounted () {
    this.getMarcas()
  },
  computed: {
    ...mapState('marcas', ['marcas'])
  },
  methods: {
    ...mapActions('marcas', ['ActionGetMarcas']
    ),
    ...mapActions('marcas', ['ActionGetMarcasDescricao']
    ),
    marcasListClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.marca = event.marcaSelecionada
    },
    btVoltarClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getMarcas()
    },
    btSalvarClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getMarcas()
    },
    getMarcas () {
      this.ActionGetMarcas()
    },
    searchTermChanged (event) {
      this.ActionGetMarcasDescricao(event.searchTerm)
    }
  }
}
</script>

<style>
</style>
