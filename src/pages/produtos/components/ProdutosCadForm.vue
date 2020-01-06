<template>
  <div class="ProdutosForm">
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
      <!-- NAV-TABS -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="info-Cadastrais-tab"
            data-toggle="tab"
            href="#info-Cadastrais"
            role="tab"
            aria-controls="info-Cadastrais"
            aria-selected="true"
          >Inf. Cadastrais</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="info-comerciais-tab"
            data-toggle="tab"
            href="#info-comerciais"
            role="tab"
            aria-controls="info-comerciais"
            aria-selected="false"
          >Inf. Comerciais</a>
        </li>
      </ul>

      <!-- TAB-CONTENTS -->
      <div class="tab-content mt-3" id="myTabContent">
        <!--  I n f o r m a ç õ e s   C a d a s t r a i s  -->
        <div
          class="tab-pane fade show active"
          id="info-Cadastrais"
          role="tabpanel"
          aria-labelledby="info-Cadastrais-tab"
        >
          <div class="card">
            <!-- FORM -->
            <div class="card-body">
              <form>
                <!-- ========================================================= -->
                <!-- C Ó D I G O ,   D E S C R I Ç Ã O   E   C O M P L E M E N T O -->
                <div class="row">
                  <!-- C Ó D I G O -->
                  <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <label for="cadproNet.codigo" class="font-bold text-dark">Código</label>
                    <input
                      class="form-control font-uppercase"
                      v-model="cadproNet.codigo"
                      id="cadproNet.codigo"
                      maxlength="6"
                      disabled="true"
                    />
                  </div>
                  <!-- D E S C R I Ç Ã O -->
                  <div class="col-sm-9 col-md-7 col-lg-5 col-xl-5">
                    <label
                      for="cadproNet.descricao"
                      class="font-bold text-dark"
                    >Descrição da Produto</label>
                    <input
                      class="form-control"
                      v-model="cadproNet.descricao"
                      id="cadproNet.descricao"
                    />
                  </div>
                  <!-- C O M P L E M E N T O -->
                  <div class="col-sm-12 col-md-8 col-lg-5 col-xl-5">
                    <label for="cadproNet.observacao" class="font-bold text-dark">Complemento</label>
                    <input
                      class="form-control"
                      v-model="cadproNet.observacao"
                      id="cadproNet.observacao"
                    />
                  </div>
                </div>

                <!-- ========================================================= -->
                <!-- I C M S   E   U N I D A D E  -->
                <div class="row">
                  <!-- I C M S -->
                  <div class="col-9 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <label for="cadproNet.codTrib" class="font-bold text-dark">ICMS</label>
                    <select class="form-control" v-model="cadproNet.codTrib" id="cadproNet.codTrib">
                      <option
                        v-for="icms in icmsList"
                        :key="icms.icmsItem"
                        :value="icms.icmsItem"
                      >{{icms.icmsItem}}</option>
                    </select>
                  </div>
                  <!-- U N I D A D E -->
                  <div class="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1">
                    <label for="cadproNet.unidade" class="font-bold text-dark">Unidade</label>
                    <input class="form-control" v-model="cadproNet.unidade" id="cadproNet.unidade" />
                  </div>
                </div>

                <!-- ========================================================= -->
                <!-- M A R C A   E   T I P O -->
                <div class="row">
                  <!-- M A R C A -->
                  <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <label for="cadproNet.class1" class="font-bold text-dark">Marca</label>
                    <select class="form-control" v-model="cadproNet.class1" id="cadproNet.class1">
                      <option
                        v-for="marca in marcas"
                        :key="marca.Class1NetCodigo"
                        :value="marca.Class1NetCodigo"
                      >{{marca.Class1NetDescricao}}</option>
                    </select>
                  </div>
                  <!-- T I P O -->
                  <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <label for="cadproNet.class2" class="font-bold text-dark">Tipo</label>
                    <select class="form-control" v-model="cadproNet.class2" id="cadproNet.class2">
                      <option
                        v-for="tipo in tipos"
                        :key="tipo.Class2NetCodigo"
                        :value="tipo.Class2NetCodigo"
                      >{{tipo.Class2NetDescricao}}</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- I n f o r m a ç õ e s   F i s c a i s -->
        <div
          class="tab-pane fade"
          id="info-comerciais"
          role="tabpanel"
          aria-labelledby="info-comerciais-tab"
        >
          <div class="card">
            <!-- Informações Fiscais -->
            <div class="card-body">
              <!-- ========================================================= -->
              <!-- SITUAÇÃO, DECIMAIS, CATEGORIA -->
              <div class="row">
                <!-- SITUAÇÃO -->
                <div class="col-9 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                  <label for="cadproNet.status" class="font-bold text-dark">Situação</label>
                  <select class="form-control" v-model="cadproNet.status" id="cadproNet.status">
                    <option
                      v-for="situacao in situacaoList"
                      :key="situacao.situacaoItem"
                      :value="situacao.situacaoItem"
                    >{{situacao.situacaoItem}}</option>
                  </select>
                </div>
                <!-- DECIMAIS -->
                <div class="col-9 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                  <label for="cadproNet.decimaisPreco" class="font-bold text-dark">Decimais</label>
                  <select
                    class="form-control"
                    v-model="cadproNet.decimaisPreco"
                    id="cadproNet.decimaisPreco"
                  >
                    <option
                      v-for="decimais in decimaisList"
                      :key="decimais.decimaisItem"
                      :value="decimais.decimaisItem"
                    >{{decimais.decimaisItem}}</option>
                  </select>
                </div>
                <!-- CATEGORIA -->
                <div class="col-9 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                  <label for="cadproNet.categoria" class="font-bold text-dark">Categoria</label>
                  <select
                    class="form-control"
                    v-model="cadproNet.categoria"
                    id="cadproNet.categoria"
                  >
                    <option
                      v-for="categoria in categoriaList"
                      :key="categoria.categoriaItem"
                      :value="categoria.categoriaItem"
                    >{{categoria.categoriaItem}}</option>
                  </select>
                </div>
                <!-- CHECKBOXS -->
                <div class="col-12 col-lg-2 mt-2">
                  <label class="checkbox-inline font-black font-size12">
                    <input type="checkbox" v-model="cadproNet.listaPreco" id="cadproNet.listaPreco" /> Lista de Preços
                  </label>
                  <label class="checkbox-inline font-black font-size12">
                    <input
                      type="checkbox"
                      v-model="cadproNet.lojaVirtual"
                      id="cadproNet.lojaVirtual"
                    /> Loja Virtual
                  </label>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- Origem, Cod.Class.Fiscal, NCM  -->
              <div class="row">
                <!-- Origem -->
                <div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                  <label for="cadproNet.icms_Origem" class="font-bold text-dark">Origem</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.icms_Origem"
                    id="cadproNet.icms_Origem"
                    mask="#"
                    :masked="true"
                  />
                </div>
                <!-- Cod.Class.Fiscal -->
                <div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                  <label for="cadproNet.classFiscal" class="font-bold text-dark">Class.Fiscal</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.classFiscal"
                    id="cadproNet.classFiscal"
                    mask="##"
                    :masked="true"
                  />
                </div>
                <!-- NCM -->
                <div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                  <label for="cadproNet.classFiscalExtenso" class="font-bold text-dark">NCM</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.classFiscalExtenso"
                    id="cadproNet.classFiscalExtenso"
                    mask="########"
                    :masked="true"
                  />
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   I C M S -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">ICMS</h5>
                </div>
              </div>
              <!-- GRUPO ICMS  -->
              <div class="row bg-greyLight">
                <!-- CST ICMS -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.sitTributaria" class="font-bold text-dark">CST</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.sitTributaria"
                    id="cadproNet.sitTributaria"
                    mask="###"
                    :masked="true"
                  />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
                <!-- Mod.Base Calc.ICMS -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.icms_ModBC" class="font-bold text-dark">Mod.B.Calc.</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.icms_ModBC"
                    id="cadproNet.icms_ModBC"
                    mask="#"
                    :masked="true"
                  />
                </div>
                <!-- Aliq.Reduzida ICMS -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.icmsReduzido" class="font-bold text-dark">Aliq.Reduz.</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.icmsReduzido"
                    id="cadproNet.icmsReduzido"
                  />
                </div>
                <!-- % Redução de Base de Calculo ICMS -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.baseIcmsRed" class="font-bold text-dark">% Red.BC</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.baseIcmsRed"
                    id="cadproNet.baseIcmsRed"
                  />
                </div>
                <!-- % Diferimento ICMS -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.icms_PercDiferim" class="font-bold text-dark">% Diferim.</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.icms_PercDiferim"
                    id="cadproNet.icms_PercDiferim"
                  />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   S U B S T I T U I Ç Ã O   T R I B U T Á R I A -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">SUBSTITUIÇÃO TRIBUTÁRIA</h5>
                </div>
              </div>
              <!-- GRUPO SUBSTITUIÇÃO TRIBUTÁRIA  -->
              <div class="row bg-greyLight">
                <!-- CST ST -->
                <div class="col-3 col-sm-2 col-xl-1">
                  <label for="cadproNet.codCest" class="font-bold text-dark">CEST</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.codCest"
                    id="cadproNet.codCest"
                    mask="######"
                    :masked="true"
                  />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
                <!-- Mod.Base Calc.ICMS -->
                <div class="col-3 col-sm-2 col-xl-1">
                  <label for="cadproNet.icms_ModBCST" class="font-bold text-dark">Mod.BC</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.icms_ModBCST"
                    id="cadproNet.icms_ModBCST"
                    mask="#"
                    :masked="true"
                  />
                </div>
                <!-- Aliq.Reduzida ICMS -->
                <div class="col-3 col-sm-3 col-md-2 col-xl-1">
                  <label for="cadproNet.icms_PercRedBCST" class="font-bold text-dark">% Red.BC</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.icms_PercRedBCST"
                    id="cadproNet.icms_PercRedBCST"
                  />
                </div>
                <!-- % Redução de Base de Calculo ICMS -->
                <div class="col-3 col-sm-3 col-md-2 col-xl-1">
                  <label
                    for="cadproNet.icms_PercMargemAdicST"
                    class="font-bold text-dark"
                  >% Marg.Adic</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.icms_PercMargemAdicST"
                    id="cadproNet.icms_PercMargemAdicST"
                  />
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   I P I -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">IPI</h5>
                </div>
              </div>
              <!-- GRUPO IPI  -->
              <div class="row bg-greyLight">
                <!-- CST IPI -->
                <div class="col-3 col-sm-2 col-xl-1">
                  <label for="cadproNet.ipi_CST" class="font-bold text-dark">CST</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.ipi_CST"
                    id="cadproNet.ipi_CST"
                    mask="##"
                    :masked="true"
                  />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
                <!-- Aliq.IPI -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.percIPI" class="font-bold text-dark">% Aliq</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.percIPI"
                    id="cadproNet.percIPI"
                  />
                </div>
                <!-- C.ENQ -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.ipi_Cenq" class="font-bold text-dark">C.Enq.</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.ipi_Cenq"
                    id="cadproNet.ipi_Cenq"
                    mask="###"
                    :masked="true"
                  />
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   P I S   E   C O F I N S -->
              <div class="row">
                <div class="col-6 col-md-4 col-xl-2">
                  <h5 class="text-primary text-bold mt-3">PIS</h5>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                  <h5 class="text-primary text-bold mt-3">COFINS</h5>
                </div>
              </div>
              <!-- GRUPO PIS E COFINS  -->
              <div class="row bg-greyLight">
                <!-- CST PIS -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.pis_CST" class="font-bold text-dark">CST</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.pis_CST"
                    id="cadproNet.pis_CST"
                    mask="##"
                    :masked="true"
                  />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
                <!-- Aliq.PIS -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.pis_Aliquota" class="font-bold text-dark">% Aliq</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.pis_Aliquota"
                    id="cadproNet.pis_Aliquota"
                  />
                </div>

                <!-- CST COFINS -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.cofins_CST" class="font-bold text-dark">CST</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.cofins_CST"
                    id="cadproNet.cofins_CST"
                    mask="##"
                    :masked="true"
                  />
                </div>
                <!-- Aliq.COFINS -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.cofins_Aliquota" class="font-bold text-dark">% Aliq</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.cofins_Aliquota"
                    id="cadproNet.cofins_Aliquota"
                  />
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   CFOP SAT E NFe -->
              <div class="row">
                <div class="col-6 col-md-4">
                  <h5 class="text-primary text-bold mt-3">SAT CFOP</h5>
                </div>
                <div class="col-6 col-md-4">
                  <h5 class="text-primary text-bold mt-3">NFe CFOP</h5>
                </div>
              </div>
              <!-- GRUPO CFOP SAT E NFE  -->
              <div class="row bg-greyLight">
                <!-- SAT CFOP ESTADO -->
                <div class="col-3 col-md-2">
                  <label for="cadproNet.satCfop" class="font-bold text-dark">No Estado</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.satCfop"
                    id="cadproNet.satCfop"
                    mask="####"
                    :masked="true"
                  />
                </div>
                <!-- SAT CFOP OUTRO ESTADO -->
                <div class="col-3 col-md-2">
                  <label for="cadproNet.satCfop_Est" class="font-bold text-dark">Outro Estado</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.satCfop_Est"
                    id="cadproNet.satCfop_Est"
                    mask="####"
                    :masked="true"
                  />
                </div>

                <!-- NFE CFOP ESTADO -->
                <div class="col-3 col-md-2">
                  <label for="cadproNet.cfopVendaEstadual" class="font-bold text-dark">No Estado</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.cfopVendaEstadual"
                    id="cadproNet.cfopVendaEstadual"
                    mask="####"
                    :masked="true"
                  />
                </div>
                <!-- NFE CFOP OUTRO ESTADO -->
                <div class="col-3 col-md-2">
                  <label for="cadproNet.cfopVendaInterEst" class="font-bold text-dark">Outro Estado</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.cfopVendaInterEst"
                    id="cadproNet.cfopVendaInterEst"
                    mask="####"
                    :masked="true"
                  />
                  <span class="font-size10 font-black font-bold float-right text-greyLight">.</span>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   I M P O S T O S -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">% Total de Impostos NFe e SAT</h5>
                </div>
              </div>
              <!-- GRUPO IMPOSTOS FED, IMP, EST, MUN  -->
              <div class="row bg-greyLight">
                <!-- Federais -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.percTotalImpostos" class="font-bold text-dark">Federais</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.percTotalImpostos"
                    id="cadproNet.percTotalImpostos"
                  />
                </div>
                <!-- Importação -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.percTotalImpostosImp" class="font-bold text-dark">Importação</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.percTotalImpostosImp"
                    id="cadproNet.percTotalImpostosImp"
                  />
                </div>

                <!-- Estaduais -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.percTotalImpostosEst" class="font-bold text-dark">Estaduais</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.percTotalImpostosEst"
                    id="cadproNet.percTotalImpostosEst"
                  />
                </div>
                <!-- Municipais -->
                <div class="col-3 col-md-2 col-xl-1">
                  <label for="cadproNet.percTotalImpostosMun" class="font-bold text-dark">Municipais</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="cadproNet.percTotalImpostosMun"
                    id="cadproNet.percTotalImpostosMun"
                  />
                  <span class="font-size10 font-black font-bold float-right text-greyLight">.</span>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   NFe PRODUÇÃO ESCALA RELEVANTE -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">Indicador de Produção em Escala Relevante</h5>
                </div>
              </div>
              <!-- PRODUÇÃO ESCALA RELEVANTE  -->
              <div class="row bg-greyLight">
                <!-- INDICADOR ESCALA RELEVANTE -->
                <div class="col-3 col-md-2 col-lg-1">
                  <label for="cadproNet.PERIndEscala" class="font-bold text-dark">Indicador</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.PERIndEscala"
                    id="cadproNet.PERIndEscala"
                    mask="A"
                    :masked="true"
                  />
                </div>
                <!-- CNPJ FABRICANTE -->
                <div class="col-7 col-sm-4 col-md-3 col-lg-2">
                  <label for="cadproNet.PERCNPJFab" class="font-bold text-dark">CNPJ Fabr.</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.PERCNPJFab"
                    id="cadproNet.PERCNPJFab"
                    mask="##.###.###/####-##"
                    :masked="false"
                  />
                  <span class="font-size10 font-black font-bold float-right text-greyLight">.</span>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   R A S T R E A B I L I D A D E -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">NFe Ratreabilidade</h5>
                  <span
                    class="text-dark font-size10 text-bold"
                  >Obrigatório o preenchimento no caso de medicamentos e prod.farmaceuticos</span>
                </div>
              </div>
              <!-- GRUPO RASTREABILIDADE  -->
              <div class="row bg-greyLight">
                <!-- NUMERO LOTE -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.RPnLote" class="font-bold text-dark">Lote</label>
                  <input class="form-control" v-model="cadproNet.RPnLote" id="cadproNet.RPnLote" />
                </div>
                <!-- QUANTIDADE NO LOTE -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.RPqLote" class="font-bold text-dark">Qt.Lote</label>
                  <input class="form-control" v-model="cadproNet.RPqLote" id="cadproNet.RPqLote" />
                </div>
                <!-- DATA DE FABRICAÇÃO -->
                <div class="col-4 col-sm-2">
                  <label for="cadproNet.RPdFab" class="font-bold text-dark">Data Fabr.</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.RPdFab"
                    id="cadproNet.RPdFab"
                    mask="##/##/####"
                    :masked="true"
                  />
                </div>
                <!-- DATA DE VALIDADE -->
                <div class="col-4 col-sm-2">
                  <label for="cadproNet.RPdVal" class="font-bold text-dark">Data Val.</label>
                  <the-mask
                    class="form-control"
                    v-model="cadproNet.RPdVal"
                    id="cadproNet.RPdVal"
                    mask="##/##/####"
                    :masked="true"
                  />
                </div>
                <!-- CODIGO AGREGAÇÃO -->
                <div class="col-4 col-sm-2 col-xl-1">
                  <label for="cadproNet.RPcAgreg" class="font-bold text-dark">Cod.Agreg.</label>
                  <input class="form-control" v-model="cadproNet.RPcAgreg" id="cadproNet.RPcAgreg" />
                  <span class="font-size10 font-black font-bold float-right text-danger">+ info</span>
                </div>
              </div>

              <!-- ========================================================= -->
              <!-- G R U P O   N F E   C O M B U S T I V E I S -->
              <div class="row">
                <div class="col">
                  <h5 class="text-primary text-bold mt-3">NFe Combustiveis</h5>
                </div>
              </div>
              <!-- GRUPO NFE COMBUSTIVEIS  -->
              <div class="row bg-greyLight">
                <!-- DESC.ANP -->
                <div class="col">
                  <label for="cadproNet.descANP" class="font-bold text-dark">Desc.ANP</label>
                  <input class="form-control" v-model="cadproNet.descANP" id="cadproNet.descANP" />
                  <span class="font-size10 font-black font-bold float-right text-greyLight">.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FIM TAB-CONTENTS -->
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
      <br />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CadproNetModel from '../../../models/CadproNet-model';
import { TheMask } from 'vue-the-mask';

export default {
  props: {
    produto: { type: Object, required: true }
  },
  data () {
    return {
      formTitle: "",
      isInsertion: true,
      cadproNet: new CadproNetModel( this.produto ),
      icmsList: [],
      situacaoList: [],
      decimaisList: [],
      categoriaList: []
    };
  },
  components: {
    TheMask
  },
  created () {
    if ( !this.produto.CadproNetCodigo ) {
      this.formTitle = "Inserindo Produto ...";
      this.isInsertion = true;
    } else {
      this.formTitle = "Editando";
      this.isInsertion = false;
    }
  },
  mounted () {
    this.getMarcas()
    this.getTipos()
    this.icmsList = this.cadproNet.getIcmsList()
    this.situacaoList = this.cadproNet.getSituacaoList()
    this.decimaisList = this.cadproNet.getDecimaisList()
    this.categoriaList = this.cadproNet.getCategoriaList()
  },
  computed: {
    ...mapState( "marcas", ["marcas"] ),
    ...mapState( "tipos", ["tipos"] )
  },
  methods: {
    ...mapActions( "produtos", ["ActionPutProdutos"] ),
    ...mapActions( "produtos", ["ActionPostProdutos"] ),
    ...mapActions( "marcas", ["ActionGetMarcas"] ),
    ...mapActions( "tipos", ["ActionGetTipos"] ),

    getMarcas () {
      this.ActionGetMarcas();
    },

    getTipos () {
      this.ActionGetTipos();
    },

    btSalvarClick () {
      if ( !this.cadproNet.descricao ) { return false }

      if ( this.isInsertion ) {
        this.ActionPostProdutos( this.cadproNet.getJsonApiProdutos() )
          .then( res => { this.$emit( "btSalvarClick", { moduloAtivar: "Lista" } ) } )
          .catch( res => { alert( "Erro !!" ) } )
      } else {
        this.ActionPutProdutos( this.cadproNet.getJsonApiProdutos() )
          .then( res => { this.$emit( "btSalvarClick", { moduloAtivar: "Lista" } ) } )
          .catch( res => { alert( "Erro !!" ) } )
      }
    },

    btVoltarClick () {
      this.$emit( "btVoltarClick", { moduloAtivar: "Lista" } );
    }
  }
};
</script>

<style>
label {
  margin-bottom: 0;
  margin-left: 5px;
  font-size: 10px;
}
.card-buttonSalvar {
  padding: 0.7rem !important;
}
</style>
