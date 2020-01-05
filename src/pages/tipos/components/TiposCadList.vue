<template>
  <div class="TiposList">
    <div class="row TITULO-BOTOES my-2">

      <div class="col-4">
        <h5 class="mt-1 ml-1"><i
            class="fa fa-laptop text-primary"
            aria-hidden="true"
          ></i>
          <span class="ml-2">
            Tipos
          </span>
        </h5>
      </div>

      <div class="col-8">
        <div class="float-right">
          <button
            class="btn btn-md bg-button text-danger font-bold mr-2"
            @click="btVoltarClick()"
          >
            Voltar
          </button>
          <button
            class="btn btn-md bg-button mr-2"
            @click="addClick()"
          >
            <i class="fa fa-plus text-success font-size16"></i>
          </button>
          <button
            class="btn btn-md bg-button mr-2"
            onClick="javascript:window.print()"
          >
            <i class="fa fa-print text-primary font-size16"></i>
          </button>
          <button
            class="btn btn-md bg-button"
            @click="searchClick()"
          >
            <i class="fas fa-search text-primary font-size16"></i>
          </button>
        </div>
      </div>

    </div>

    <template
      v-if="searchInputActive"
      class="SEARCH-FORM"
    >
      <div class="row mb-2 mr-1">
        <div class="col-6">
          <!-- {{answer}} -->
          <!-- {{searchWordReady}} -->
        </div>
        <div class="col-6">
          <form>
            <input
              class="form-control"
              v-model="searchWord"
              id="searchWord"
              placeholder="O que você está procurando ?"
            />
          </form>
        </div>
      </div>
    </template>

    <div class="scroll LISTA-TIPOS mb-3 ml-1">
      <table class="table table-hover">
        <thead>
          <tr class="bg-black text-light">
            <th> C o d i g o </th>
            <th> D e s c r i ç ã o </th>
            <th class="widthAcoes">
              <div class="float-right mr-3">
                A ç õ e s
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="tipo in tipos"
            :key="tipo.Class2NetCodigo"
          >
            <td><strong>{{tipo.Class2NetCodigo}}</strong></td>
            <td>{{tipo.Class2NetDescricao}}</td>
            <td class="widthAcoes">
              <div class="float-right">
                <a
                  class="fas fa-pencil-alt font-size16 pointer text-primary mr-3"
                  @click="listClick(tipo)"
                > </a>
                <a
                  class="fa fa-trash-alt font-size16 pointer text-danger mr-2"
                  @click.stop="deleteClick(tipo.Class2NetId)"
                > </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import { mapActions } from 'vuex'
import _ from 'lodash'

export default {
  data () {
    return {
      searchWord: '',
      searchInputActive: false
    }
  },
  props: {
    tipos: { type: Array, required: true }
  },
  created: function() {
    this.debouncedGetSearch = _.debounce( this.getSearch, 1000 )
  },
  watch: {
    searchWord: function() {
      this.debouncedGetSearch()
    }
  },
  methods: {
    ...mapActions( 'tipos', ['ActionDeleteTipos']
    ),
    getSearch: function() {
      this.$emit( 'searchTermChanged', { moduloAtivar: 'Lista', searchTerm: this.searchWord } )
      this.searchWordReady = _.capitalize( this.searchWord )
      this.answer = 'Processado !!'
    },
    listClick ( pTipo ) {
      this.$emit( 'tiposListClick', {
        moduloAtivar: 'Form',
        tipoSelecionada: pTipo
      } )
    },
    addClick () {
      const tipo = {
        Class2NetCodigo: '',
        Class2NetDescricao: ''
      }
      this.$emit( 'tiposListClick', {
        moduloAtivar: 'Form',
        tipoSelecionada: tipo
      } )
    },
    deleteClick ( id ) {
      this.ActionDeleteTipos( { id: id } )
        .then( res => {
          this.$emit( 'btSalvarClick', { moduloAtivar: 'Lista' } )
        } )
        .catch( res => {
          alert( 'Erro !!' )
        } )
    },
    searchClick () {
      this.searchInputActive = !this.searchInputActive
    },
    btVoltarClick () {
      this.$router.push( { name: 'home' } )
    }
  }
}
</script>

<style>
.table td,
.table th {
  padding: 0.1rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  font-size: 10px;
}
.scroll {
  height: calc(100vh - 200px);
  overflow-y: auto;
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(226, 231, 243);
  /* flex-grow: 1; */
}
.bg-button {
  background-color: rgb(245, 247, 153);
}
</style>
