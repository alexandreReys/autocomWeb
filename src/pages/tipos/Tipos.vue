<template>
  <div class="container-fluid">
    <nav class="mt-3">
      <ol class="breadcrumb font-size14">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active">Cadastro de Tipos</li>
      </ol>
    </nav>

    <TiposCadList v-if="moduloAtivo=='Lista'"
      :tipos="tipos"
      @tiposListClick="tiposListClick"
      @btSalvarClick="btSalvarClick"
      @searchTermChanged="searchTermChanged">
    </TiposCadList>

    <TiposCadForm v-if="moduloAtivo=='Form'"
      :tipo="this.tipo"
        @btVoltarClick="btVoltarClick"
        @btSalvarClick="btSalvarClick">
    </TiposCadForm>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TiposCadList from './components/TiposCadList.vue'
import TiposCadForm from './components/TiposCadForm.vue'

export default {
  components: {
    TiposCadList,
    TiposCadForm
  },
  data () {
    return {
      tipo: {
        Class2NetCodigo: '',
        Class2NetDescricao: ''
      },
      moduloAtivo: 'Lista'
    }
  },
  mounted () {
    this.getTipos()
  },
  computed: {
    ...mapState('tipos', ['tipos'])
  },
  methods: {
    ...mapActions('tipos', ['ActionGetTipos']
    ),
    ...mapActions('tipos', ['ActionGetTiposDescricao']
    ),
    tiposListClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.tipo = event.tipoSelecionada
    },
    btVoltarClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getTipos()
    },
    btSalvarClick (event) {
      if (event.moduloAtivar !== this.moduloAtivo) {
        this.moduloAtivo = event.moduloAtivar
      }
      this.getTipos()
    },
    getTipos () {
      this.ActionGetTipos()
    },
    searchTermChanged (event) {
      this.ActionGetTiposDescricao(event.searchTerm)
    }
  }
}
</script>

<style>
</style>
