import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { TempoMoagemBatida } from 'src/app/models/TempoMoagemBatida';

@Component({
  selector: 'app-tempos-moagem-batida',
  templateUrl: './tempos-moagem-batida.component.html',
  styleUrls: ['./tempos-moagem-batida.component.scss']
})
export class TemposMoagemBatidaComponent implements OnInit {
  numLote = '';
  isLoading: boolean;
  temposMoagemBatida: TempoMoagemBatida[];
  isGerandoExcel = false;

  constructor(
    private svc: LoteService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.numLote = this.route.snapshot.queryParamMap.get('lote');
    }

  ngOnInit(): void {
  }

  consultarTemposMoagemBatida() {
    this.isLoading = true;
    this.svc.getTemposMoagemBatida(this.numLote).subscribe(data => {
      this.isLoading = false;
      this.temposMoagemBatida = data.Response;
    });
  }

  imprimeExcel(){
    this.isGerandoExcel = true;
    this.svc.getTemposMoagemBatidaExcel(this.numLote).subscribe(file => {
      window.open(window.URL.createObjectURL(file));
      this.isGerandoExcel = false;
    });
  }
}
