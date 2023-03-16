using BookAPI;
using BookAPI.Models;
using LinqToDB.Data;
using System.Collections.Generic;
using System.Linq;
using trouwnutrition.mes.api.domain.Entity;

namespace trouwnutrition.mes.api.service
{
    public class LoteService
    {
        private readonly MainContext ctx;

        public RetornoProc AssociarLotePRD(int nseqbatida, string lote_prd, string lote_real, decimal quantidade, string ua_real, Bool ies_fifo_auto, string usuario)
        {
            return ctx.QueryProc<Livro>("sp_trw_mesweb_acerto_lotes_prd", new
            {
                nseqbatida,
                lote_prd,
                ies_fifo_auto,
                lote_real,
                ua_real,
                quantidade,
                usuario
            }).FirstOrDefault();
        }

        public IEnumerable<Livro> ObterTempoMoagemBatida(string NumLote)
        {
            return ctx.QueryProc<Livro>("sp_trw_relat_tempo_moagem_batida", new
            {
                p_cod_empresa = "01",
                p_lote_prod = NumLote
            });
        }
    }
}