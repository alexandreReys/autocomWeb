export default class CadproNet {
  constructor (obj = {}) {
    this.idEmpresa = obj.CadproNetIdEmpresa || '';
    this.loja = obj.CadproNetLoja || 'Matriz';

    this.codigo = obj.CadproNetCodigo || '';
    this.descricao = obj.CadproNetDescricao || '';
    this.observacao = obj.CadproNetObservacao || '';

    if ( obj.CadproNetCodTrib == 'Sub' ) { this.codTrib = 'Sub.Tributária' } else
    if ( obj.CadproNetCodTrib == 'Ise' ) { this.codTrib = 'Isento' } else
    if ( obj.CadproNetCodTrib == 'Nao' ) { this.codTrib = 'Não Tributada' }  else { this.codTrib = 'Tributada' };

    this.unidade = obj.CadproNetUnidade ?  obj.CadproNetUnidade : 'UN';

    this.class1 = obj.CadproNetClass1 ?  obj.CadproNetClass1 : 'DIVERS';
    this.class2 = obj.CadproNetClass2 ?  obj.CadproNetClass2 : 'DIVERS';
    this.class3 = obj.CadproNetClass3 || '';
    this.class4 = obj.CadproNetClass4 || '';

    if ( obj.CadproNetDecimaisPreco == 3) {this.decimaisPreco = '3 decimais'} else {this.decimaisPreco = '2 decimais'}
    if ( obj.CadproNetListaPreco == 'T' ) { this.listaPreco = true } else { this.listaPreco = false };
    if ( obj.CadproNetLojaVirtual == 'T' ) { this.lojaVirtual = true } else { this.lojaVirtual = false };

    this.status = obj.CadproNetStatus ?  obj.CadproNetStatus : 'Ativo';
    this.categoria = obj.CadproNetCategoria ? obj.CadproNetCategoria : 'Produto Acabado';

    this.icms_Origem = obj.CadproNetICMS_Origem || '0';
    this.classFiscalExtenso = obj.CadproNetClassFiscalExtenso || '';
    this.classFiscal = obj.CadproNetClassFiscal || '';

    this.sitTributaria = obj.CadproNetSitTributaria || '';
    this.icms_ModBC = obj.CadproNetICMS_ModBC || '';
    this.icmsReduzido = obj.CadproNetIcmsReduzido || '0';
    this.baseIcmsRed = obj.CadproNetBaseIcmsRed || '0';
    this.icms_PercDiferim = obj.CadproNetICMS_PercDiferim || '0';

    this.codCest = obj.CadproNetCodCest || '';
    this.icms_ModBCST = obj.CadproNetICMS_ModBCST || '';
    this.icms_PercRedBCST = obj.CadproNetICMS_PercRedBCST || '0';
    this.icms_PercMargemAdicST = obj.CadproNetICMS_PercMargemAdicST || '0';

    this.ipi_CST = obj.CadproNetIPI_CST || '';
    this.percIPI = obj.CadproNetPercIPI || '0';
    this.ipi_Cenq = obj.CadproNetIPI_Cenq || '';

    this.pis_CST = obj.CadproNetPIS_CST || '';
    this.pis_Aliquota = obj.CadproNetPIS_Aliquota || '0';
    this.cofins_CST = obj.CadproNetCOFINS_CST || '';
    this.cofins_Aliquota = obj.CadproNetCOFINS_Aliquota || '0';

    this.cfopVendaEstadual = obj.CadproNetCFOPVendaEstadual || '';
    this.cfopVendaInterEst = obj.CadproNetCFOPVendaInterEst || '';
    this.satCfop = obj.CadproNetSatCfop || '';
    this.satCfop_Est = obj.CadproNetSatCfop_Est || '';

    this.percTotalImpostos = obj.CadproNetPercTotalImpostos || '0';
    this.percTotalImpostosImp = obj.CadproNetPercTotalImpostosImp || '0';
    this.percTotalImpostosEst = obj.CadproNetPercTotalImpostosEst || '0';
    this.percTotalImpostosMun = obj.CadproNetPercTotalImpostosMun || '0';

    this.PERIndEscala = obj.CadproNetPERIndEscala || '';
    this.PERCNPJFab = obj.CadproNetPERCNPJFab || '';
    this.PERCodBenef = obj.CadproNetPERCodBenef || '';

    this.RPnLote = obj.CadproNetRPnLote || '';
    this.RPqLote = obj.CadproNetRPqLote || '';

    if (obj.CadproNetRPdFab) {
      let dt = obj.CadproNetRPdFab.toString();
      this.RPdFab = dt.substr(8,2) +'/'+ dt.substr(5,2) +'/'+ dt.substr(0,4);
    }
    if (obj.CadproNetRPdVal) {
      dt = obj.CadproNetRPdVal.toString();
      this.RPdVal = dt.substr(8,2) +'/'+ dt.substr(5,2) +'/'+ dt.substr(0,4);
    }
    this.RPcAgreg = obj.CadproNetRPcAgreg || '';

    this.descANP = obj.CadproNetdescANP || '';

    this.icmsIntra = obj.CadproNetIcmsIntra;
    this.pesoUnidadeBalanca = obj.CadproNetPesoUnidadeBalanca;
    this.validade = obj.CadproNetValidade;
    this.dataAlter = obj.CadproNetDataAlter;
    this.horaAlter = obj.CadproNetHoraAlter;
    this.consignacao = obj.CadproNetConsignacao;
    this.dollar = obj.CadproNetDollar;
    this.kit = obj.CadproNetKit;
    this.coleta = obj.CadproNetColeta;
    this.diversos = obj.CadproNetDiversos;
    this.regraCalcICMS = obj.CadproNetRegraCalcICMS;
    this.mva = obj.CadproNetMVA;
    this.ncm = obj.CadproNetNCM;
    this.cfopEntrada = obj.CadproNetCFOPEntrada;
    this.baseMoeda = obj.CadproNetBaseMoeda;
    this.codTribBalcao = obj.CadproNetCodTribBalcao;
    this.observacoes = obj.CadproNetObservacoes;

    this.PathImg = obj.CadproNetPathImg;
  }

  getJsonApiProdutos () {
    this.codigo = this.codigo.toUpperCase();

    if ( this.decimaisPreco == '2 decimais' ) {this.decimaisPreco = '2'} else {this.decimaisPreco = '3'};
    if ( this.listaPreco == true ) { this.listaPreco = 'T' } else { this.listaPreco = 'F' };
    if ( this.lojaVirtual == true ) { this.lojaVirtual = 'T' } else { this.lojaVirtual = 'F' };

    if ( this.codTrib == 'Sub.Tributária' ) { this.codTrib = 'Sub' } else
    if ( this.codTrib == 'Isento' ) { this.codTrib = 'Ise' } else
    if ( this.codTrib == 'Não Tributada' ) { this.codTrib = 'Nao' }
    else { this.codTrib = 'T01' };

    if (this.RPdFab) {
      let dt = this.RPdFab;
      this.RPdFab = dt.substr(6,4) +'-'+ dt.substr(3,2) +'/'+ dt.substr(0,2);
    }

    if (this.RPdVal) {
      let dt = this.RPdVal;
      this.RPdVal = dt.substr(6,4) +'-'+ dt.substr(3,2) +'/'+ dt.substr(0,2);
    }

    return {
      CadproNetLoja: this.loja ? this.loja : 'Matriz',
      CadproNetDescricao: this.descricao,
      CadproNetObservacao: this.observacao,
      CadproNetUnidade: this.unidade,
      CadproNetClass1: this.class1,
      CadproNetClass2: this.class2,
      CadproNetClass3: this.class3,
      CadproNetClass4: this.class4,
      CadproNetPercIPI: this.percIPI,
      CadproNetCodTrib: this.codTrib,
      CadproNetCodTribBalcao: this.codTribBalcao,
      CadproNetClassFiscal: this.classFiscal,
      CadproNetSitTributaria: this.sitTributaria,
      CadproNetIcmsReduzido: this.icmsReduzido,
      CadproNetIcmsIntra: this.icmsIntra,
      CadproNetObservacoes: this.observacoes,
      CadproNetStatus: this.status,
      CadproNetPesoUnidadeBalanca: this.pesoUnidadeBalanca,
      CadproNetValidade: this.validade,
      CadproNetDecimaisPreco: this.decimaisPreco,
      CadproNetDataAlter: this.dataAlter,
      CadproNetHoraAlter: this.horaAlter,
      CadproNetConsignacao: this.consignacao,
      CadproNetDollar: this.dollar,
      CadproNetKit: this.kit,
      CadproNetListaPreco: this.listaPreco,
      CadproNetCategoria: this.categoria,
      CadproNetClassFiscalExtenso: this.classFiscalExtenso,
      CadproNetBaseIcmsRed: this.baseIcmsRed,
      CadproNetColeta: this.coleta,
      CadproNetDiversos: this.diversos,
      CadproNetRegraCalcICMS: this.regraCalcICMS,
      CadproNetLojaVirtual: this.lojaVirtual,
      CadproNetMVA: this.mva,
      CadproNetICMS_Origem: this.icms_Origem,
      CadproNetICMS_ModBC: this.icms_ModBC,
      CadproNetPIS_CST: this.pis_CST,
      CadproNetPIS_Aliquota: this.pis_Aliquota,
      CadproNetCOFINS_CST: this.cofins_CST,
      CadproNetCOFINS_Aliquota: this.cofins_Aliquota,
      CadproNetIPI_CST: this.ipi_CST,
      CadproNetICMS_ModBCST: this.icms_ModBCST,
      CadproNetICMS_PercMargemAdicST: this.icms_PercMargemAdicST,
      CadproNetICMS_PercRedBCST: this.icms_PercRedBCST,
      CadproNetNCM: this.ncm,
      CadproNetCFOPVendaEstadual: this.cfopVendaEstadual,
      CadproNetCFOPVendaInterEst: this.cfopVendaInterEst,
      CadproNetCFOPEntrada: this.cfopEntrada,
      CadproNetBaseMoeda: this.baseMoeda,
      CadproNetPercTotalImpostos: this.percTotalImpostos,
      CadproNetPercTotalImpostosImp: this.percTotalImpostosImp,
      CadproNetPercTotalImpostosEst: this.percTotalImpostosEst,
      CadproNetPercTotalImpostosMun: this.percTotalImpostosMun,
      CadproNetICMS_PercDiferim: this.icms_PercDiferim,
      CadproNetCodCest: this.codCest,
      CadproNetIPI_Cenq: this.ipi_Cenq,
      CadproNetSatCfop: this.satCfop,
      CadproNetSatCfop_Est: this.satCfop_Est,
      CadproNetPERIndEscala: this.PERIndEscala,
      CadproNetPERCNPJFab: this.PERCNPJFab,
      CadproNetPERCodBenef: this.PERCodBenef,
      CadproNetRPnLote: this.RPnLote,
      CadproNetRPqLote: this.RPqLote,
      CadproNetRPdFab: this.RPdFab,
      CadproNetRPdVal: this.RPdVal,
      CadproNetRPcAgreg: this.RPcAgreg,
      CadproNetdescANP: this.descANP,
      CadproNetPathImg: this.PathImg,
      CadproNetCodigo: this.codigo,
      CadproNetIdEmpresa: this.idEmpresa
    };
  }

  getIcmsList () {
    return [
      { 'icmsItem': 'Tributada' },
      { 'icmsItem': 'Sub.Tributária' },
      { 'icmsItem': 'Isento' },
      { 'icmsItem': 'Não Tributada' }
    ]
  }

  getSituacaoList () {
    return [
      { 'situacaoItem': 'Ativo' },
      { 'situacaoItem': 'DESATIVADO' },
      { 'situacaoItem': 'Desativar após a venda' },
    ]
  }

  getDecimaisList () {
    return [
      { 'decimaisItem': '2 decimais' },
      { 'decimaisItem': '3 decimais' },
    ]
  }

  getCategoriaList () {
    return [
      { 'categoriaItem': 'Produto Acabado' },
      { 'categoriaItem': 'Componente' },
      { 'categoriaItem': 'Matéria Prima' },
      { 'categoriaItem': 'Fabric.Própria' },
    ];
  }
}
