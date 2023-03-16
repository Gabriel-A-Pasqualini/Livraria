import { LoteService } from '../../../services/lote.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { LotePRDPendente } from '../../../models/LotePRDPendente';
import { AjusteLotePRD } from '../../../models/AjusteLotePRD';
import { NzNotificationService } from 'ng-zorro-antd';
import { FifoService } from 'src/app/services/fifo.service';
import { FrmFifoSilosSilo } from 'src/app/models/FrmFifoSilosSilo';

@Component({
  selector: 'app-ajuste-lote-prd',
  templateUrl: './ajuste-lote-prd.component.html',
  styleUrls: ['./ajuste-lote-prd.component.scss']
})
export class AjusteLotePrdComponent implements OnInit {
  @Input() lotePrd: LotePRDPendente;
  @Output() lotePrdChange = new EventEmitter<LotePRDPendente>();
  @Output() closed = new EventEmitter<void>();
  qtdeReal: number;
  loteReal: string;
  uaReal: string;
  fifosSilo: FrmFifoSilosSilo[];
  isLoadingSilo: boolean;

  constructor(
    private svc: LoteService,
    private fifo: FifoService,
    private notification: NzNotificationService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isLoadingSilo = true;
    const lote = changes.lotePrd;
    this.fifo.getFifoSilo(lote.currentValue?.item).subscribe(data => {
      this.fifosSilo = data.Response;
      this.isLoadingSilo = false;
    });
  }

  preencherCampos(fifo: FrmFifoSilosSilo) {
    this.loteReal = fifo.lote;
    this.uaReal = fifo.silo;
    if (this.lotePrd.qtdereal < fifo.saldo) {
      this.qtdeReal = this.lotePrd.qtdereal;
    }
    else {
      this.qtdeReal = fifo.saldo;
    }
  }

  efetuarAjusteLotePrd(): void {
    const ajuste = new AjusteLotePRD();
    ajuste.lotePrd = this.lotePrd.lote_prd;
    ajuste.nseqbatida = this.lotePrd.nseqbatida;
    ajuste.loteReal = this.loteReal;
    ajuste.quantidade = this.qtdeReal;
    ajuste.ua_real = this.uaReal;
    ajuste.ies_fifo_auto = 0;
    this.svc.ajustarLotePRD(ajuste).subscribe(d => {
      if (d.Success) {
        if (d.Response.IesOk) {
          this.notification.success('Ajustado', d.Response.Mensagem);
          this.lotePrdChange.emit(null);
          this.close();
        } else {
          this.notification.error('Erro', d.Response.Mensagem);
        }
      }
    });
  }

  handleCancel(): void {
    this.close();
  }

  private close() {
    this.uaReal = null;
    this.loteReal = null;
    this.qtdeReal = null;
    this.lotePrd = null;
    this.closed.emit();
  }

  ngOnInit(): void { }
}


