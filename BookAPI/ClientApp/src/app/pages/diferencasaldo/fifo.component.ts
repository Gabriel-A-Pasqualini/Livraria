import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmLote } from 'src/app/models/FrmLote';
import { FrmLoteHistorico } from 'src/app/models/FrmLoteHistorico';
import { FrmLoteFifo } from 'src/app/models/FrmLoteFifo';
import { FrmLoteProducao } from 'src/app/models/FrmLoteProducao';

@Component({
  selector: 'app-ticket',
  templateUrl: './fifo.component.html',
  styleUrls: ['./fifo.component.scss']
})
export class FifoComponent implements OnInit {
  numLote = '';
  lote: FrmLote = null;
  mostraPrd = false;
  isLoading: boolean;
  isLoadingHistorico: boolean;
  isLoadingProducao: boolean;
  isLoadingFifo: boolean;
  historico: FrmLoteHistorico[];
  fifos: FrmLoteFifo[];
  producao: FrmLoteProducao;

  constructor(
    private svc: LoteService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.numLote = this.route.snapshot.queryParamMap.get('lote');
    }

  ngOnInit(): void {
    this.consultarLote();
    this.consultarHistorico();
  }

  consultarLote() {
    this.isLoading = true;
    this.svc.getFrmLote(this.numLote).subscribe(data => {
      this.isLoading = false;
      this.lote = data.Response;
      this.isLoading = false;
      this.mostraPrd = this.lote?.tipoitem !== 'C' && this.lote?.tipolote !== 11;
      if (this.mostraPrd) {
        this.consultarProducao();
      }
      this.consultarFifo();
    });
  }

  consultarHistorico() {
    this.isLoadingHistorico = true;
    this.svc.getFrmLoteHistorico(this.numLote).subscribe(data => {
      this.historico = data.Response;
      this.isLoadingHistorico = false;
    });
  }

  consultarProducao() {
    this.isLoadingProducao = true;
    this.svc.getFrmLoteProducao(this.numLote).subscribe(data => {
      this.producao = data.Response;
      this.isLoadingProducao = false;
    });
  }

  consultarFifo() {
    this.isLoadingFifo = true;
    this.svc.getFrmLoteFifo(this.lote?.item).subscribe(data => {
      this.fifos = data.Response;
      this.isLoadingFifo = false;
    });
  }

  mostrarDetalhes() {
    this.router.navigateByUrl(`/lote/detalhe?lote=${this.numLote}`);
  }
}
