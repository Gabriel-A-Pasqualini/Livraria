import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmApontaProdLoteProd } from '../../models/FrmApontaProdLoteProd';
import { LotePRDPendente } from 'src/app/models/LotePRDPendente';
import { AjusteLotePRD } from 'src/app/models/AjusteLotePRD';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-consulta-lote-prd',
  templateUrl: './consulta-lote-prd.component.html',
  styleUrls: ['./consulta-lote-prd.component.scss']
})
export class ConsultaLotePrdComponent implements OnInit {
  numLote = '';
  isLoading: boolean;
  lotesProd: FrmApontaProdLoteProd[];
  lotesPRD: LotePRDPendente[];
  lotePrdSelecionado: LotePRDPendente = null;
  isGerandoExcel = false;

  constructor(
    private svc: LoteService,
    private route: ActivatedRoute,
    private notification: NzNotificationService
  ) {
    this.numLote = this.route.snapshot.queryParamMap.get('lote');
  }

  ngOnInit(): void {
    this.consultarLotesPRDDaProducao();
  }

  consultarLotesPRDDaProducao() {
    this.isLoading = true;
    setTimeout(() => {
      this.svc.getLotesPRDPendentes().subscribe(data => {
        this.isLoading = false;
        this.lotesPRD = data.Response;
      });
    });
  }

  imprimeExcel(){
    this.isGerandoExcel = true;
    this.svc.getLotesPRDPendentesExcel().subscribe(file => {
      window.open(window.URL.createObjectURL(file));
      this.isGerandoExcel = false;
    });
  }

  abrirAjusteLote(lote: LotePRDPendente) {
    this.lotePrdSelecionado = lote;
  }



  efetuarAjusteLotePrdAutomatico(lote: LotePRDPendente): void {
    const ajuste = new AjusteLotePRD();
    ajuste.lotePrd = lote.lote_prd;
    ajuste.nseqbatida =lote.nseqbatida;
    ajuste.loteReal = null;
    ajuste.quantidade = null;
    ajuste.ua_real = null;
    ajuste.ies_fifo_auto = 1;
    this.svc.ajustarLotePRD(ajuste).subscribe(d => {
      if (d.Success) {
        if (d.Response.IesOk) {
          this.notification.success('Ajustado', d.Response.Mensagem);
          this.consultarLotesPRDDaProducao();
        } else {
          this.notification.error('Erro', d.Response.Mensagem);
        }
      }
    });
  }
}
