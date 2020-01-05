<template>
  <div class="MarcasForm">

    <!-- PARTE DE CIMA DA TELA. BREADCRUMB, TITULO E BOTOES IMPRIMIR E VOLTAR -->
    <div class="row Header">
      <div class="col-8">
        <h5><i
            class="fa fa-laptop text-primary ml-1"
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
              <h5> <strong class="text-primary">Marcas</strong> </h5>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-xs-4 col-sm-3 col-md-2">
                <label
                  for="codigoMarca"
                  class="font-bold text-dark"
                > Código </label>
                <input
                  class="form-control font-uppercase"
                  v-model="codigoMarca"
                  id="codigoMarca"
                  maxlength="6"
                  :disabled="!isInsertion"
                />
              </div>
              <div class="col-sm-6">
                <label
                  for="descricaoMarca"
                  class="font-bold text-dark"
                > Descrição da Marca </label>
                <input
                  class="form-control"
                  v-model="descricaoMarca"
                  id="descricaoMarca"
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
    marca: { type: Object, required: true }
  },
  data () {
    return {
      formTitle: '',
      isInsertion: true,
      codigoMarca: this.marca.Class1NetCodigo,
      descricaoMarca: this.marca.Class1NetDescricao
    }
  },
  created () {
    if ( !this.marca.Class1NetCodigo ) {
      this.formTitle = 'Inserindo Marca ...'
      this.isInsertion = true
    } else {
      this.formTitle = 'Editando: ' + this.marca.Class1NetCodigo
      this.isInsertion = false
    }
  },
  methods: {
    ...mapActions( 'marcas', ['ActionPutMarcas']
    ),
    ...mapActions( 'marcas', ['ActionPostMarcas']
    ),
    btSalvarClick () {
      if ( !this.codigoMarca || !this.descricaoMarca ) { return false }

      this.codigoMarca = this.codigoMarca.toUpperCase()

      let class1 = {
        Class1NetCodigo: this.codigoMarca,
        Class1NetDescricao: this.descricaoMarca
      }

      if ( this.isInsertion ) {
        this.ActionPostMarcas( class1 )
          .then( res => {
            this.$emit( 'btSalvarClick', { moduloAtivar: 'Lista' } )
          } )
          .catch( res => {
            alert( 'Erro !!' )
          } )
      } else {
        this.ActionPutMarcas( class1 )
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
