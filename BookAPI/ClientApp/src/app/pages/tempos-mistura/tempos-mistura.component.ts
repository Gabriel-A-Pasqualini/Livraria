import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { TempoMistura } from 'src/app/models/TempoMistura';

@Component({
  selector: 'app-tempos-mistura',
  templateUrl: './tempos-mistura.component.html',
  styleUrls: ['./tempos-mistura.component.scss']
})
export class TemposMisturaComponent implements OnInit {
  numLote = '';
  isLoading: boolean;
  temposMistura: TempoMistura[];
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

  consultarTemposMistura() {
    this.isLoading = true;
    this.svc.getTemposMistura(this.numLote).subscribe(data => {
      this.isLoading = false;
      this.temposMistura = data.Response;
    });
  }

  imprimeExcel(){
    this.isGerandoExcel = true;
    this.svc.getTemposMisturaExcel(this.numLote).subscribe(file => {
      window.open(window.URL.createObjectURL(file));
      this.isGerandoExcel = false;
    });
  }
}
