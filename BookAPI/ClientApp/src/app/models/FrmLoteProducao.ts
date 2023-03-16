export interface FrmLoteProducao {
    lote: string;
    item: string;
    tipoitem: string;
    tipolote: number;
    loteorigem: string;
    tipoloteorigem: number;
    temlotefilhoorigem: number;
    datarecebimento: string;
    dataatualizacao: string;
    datainicio: string;
    data_fim: string;
    qtd_planejada: number;
    qtd_boas: number;
    tam_batch: number;
    batidas: number;
    qtd_descarte: number;
    qtd_reprocesso: number;
    datafimlote: string;
    saldo: number;
    envioajustelogix: string;
    flagliberacao: number;
    responsavelbal: string;
    respReceb: string;
    observacao: string;
    statusreceb: number;
    statuslote: number;
    flagfifoliberado: number;
    saldoSilo: number;
    saldo_Reservado: number;
    descTipoLote: string;
    descItem: string;
    stLote: string;
}
