<template>
  <div class="MarcasForm">
    <!-- PARTE DE CIMA DA TELA. TITULO E BOTOES IMPRIMIR E VOLTAR -->
    <div class="row Header">
      <div class="col-6">
        <div class="font-size20">
          <i class="fa fa-laptop text-primary ml-1 mr-1 mt-2" aria-hidden="true"></i>
          {{ formTitle }}
        </div>
      </div>
      <div class="col-6">
        <div class="float-right">
          <button
            class="btn btn-sm bg-button mr-2 mb-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Voltar para Tela Anterior"
            @click="btVoltarClick()"
          >
            <i class="fa fa-step-backward text-primary font-size14"></i>
          </button>
          <button
            class="btn btn-sm bg-button mr-1 mb-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Salvar Informações"
            @click="btSalvarClick()"
          >
            <i class="fa fa-check text-success font-size14"></i>
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
              <h5>
                <strong class="text-primary">Marcas</strong>
              </h5>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-xs-4 col-sm-3 col-md-2">
                <label for="codigoMarca" class="font-bold text-dark">Código</label>
                <input
                  class="form-control font-uppercase"
                  v-model="codigoMarca"
                  id="codigoMarca"
                  maxlength="6"
                  :disabled="!isInsertion"
                />
              </div>
              <div class="col-sm-6">
                <label for="descricaoMarca" class="font-bold text-dark">Descrição da Marca</label>
                <input class="form-control" v-model="descricaoMarca" id="descricaoMarca" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- B O T Ã O   S A L V A R -->
      <div class="card mt-2">
        <div class="card-body card-buttonSalvar">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-primary btn-md font-size10 float-right"
                @click="btSalvarClick"
              >S a l v a r</button>
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
      this.formTitle = 'Editando'
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
.card-buttonSalvar {
  padding: 0.4rem 0.7rem !important;
}
</style>
