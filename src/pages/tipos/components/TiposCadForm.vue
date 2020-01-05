<template>
  <div class="TiposForm">

    <!-- PARTE DE CIMA DA TELA. BREADCRUMB, TITULO E BOTOES IMPRIMIR E VOLTAR -->
    <div class="row Header">
      <div class="col-8">
        <h5><i
            class="fa fa-laptop text-primary ml-1 mt-2"
            aria-hidden="true"
          ></i>
          {{ formTitle }}
        </h5>
      </div>
      <div class="col-4">
        <div class="float-right">
          <button
            class="btn btn-md bg-button mr-3 mb-2"
            onClick="javascript:window.print()"
          >
            <i class="fa fa-print text-primary font-size16"></i>
          </button>
          <button
            class="btn btn-md bg-button text-danger font-bold mr-2 mb-2"
            @click="btVoltarClick()"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>

    <div class="ml-1 mr-1">
      <div class="card">

        <!-- TITULO FORM -->
        <div class="card-header">
          <div class="row">
            <div class="col-md-9">
              <h5> <strong class="text-primary">Tipos</strong> </h5>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-4 col-sm-3 col-md-2">
                <label
                  for="codigoTipo"
                  class="font-bold text-dark"
                > Código </label>
                <input
                  class="form-control font-uppercase"
                  v-model="codigoTipo"
                  id="codigoTipo"
                  maxlength="6"
                  :disabled="!isInsertion"
                />
              </div>
              <div class="col-8">
                <label
                  for="descricaoTipo"
                  class="font-bold text-dark"
                > Descrição da Tipo </label>
                <input
                  class="form-control"
                  v-model="descricaoTipo"
                  id="descricaoTipo"
                />
              </div>
            </div>
          </form>
        </div>

        <!-- BOTÃO SALVAR -->
        <div class="card-footer">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-primary btn-md font-size10 float-right"
                @click="btSalvarClick"
              >
                S a l v a r
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    tipo: { type: Object, required: true }
  },
  data () {
    return {
      formTitle: '',
      isInsertion: true,
      codigoTipo: this.tipo.Class2NetCodigo,
      descricaoTipo: this.tipo.Class2NetDescricao
    }
  },
  created () {
    if ( !this.tipo.Class2NetCodigo ) {
      this.formTitle = 'Inserindo Tipo ...'
      this.isInsertion = true
    } else {
      this.formTitle = 'Editando: ' + this.tipo.Class2NetCodigo
      this.isInsertion = false
    }
  },
  methods: {
    ...mapActions( 'tipos', ['ActionPutTipos']
    ),
    ...mapActions( 'tipos', ['ActionPostTipos']
    ),
    btSalvarClick () {
      if ( !this.codigoTipo || !this.descricaoTipo ) { return false }

      this.codigoTipo = this.codigoTipo.toUpperCase()

      let class2 = {
        Class2NetCodigo: this.codigoTipo,
        Class2NetDescricao: this.descricaoTipo
      }

      if ( this.isInsertion ) {
        this.ActionPostTipos( class2 )
          .then( res => {
            this.$emit( 'btSalvarClick', { moduloAtivar: 'Lista' } )
          } )
          .catch( res => {
            alert( 'Erro !!' )
          } )
      } else {
        this.ActionPutTipos( class2 )
          .then( res => {
            this.$emit( 'btSalvarClick', { moduloAtivar: 'Lista' } )
          } )
          .catch( res => {
            alert( 'Erro !!' )
          } )
      }
    },
    btVoltarClick () {
      this.$emit( 'btVoltarClick', { moduloAtivar: 'Lista' } )
    }
  }
}
</script>

<style>
label {
  margin-bottom: 0;
  margin-left: 5px;
  font-size: 10px;
}
</style>
