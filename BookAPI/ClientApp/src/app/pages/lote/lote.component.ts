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
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.scss']
})
export class LoteComponent implements OnInit {
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
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.consultarLote();
  }

  consultarLote() {
    if (this.router.url.indexOf('detalhe') === -1) {
      this.router.navigateByUrl(`/lote?lote=${this.numLote || ''}`);
    }

    this.isLoading = true;
    this.producao = null;
    this.historico = [];
    this.fifos = [];

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
    this.consultarHistorico();
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
