import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { TempoDosagem } from 'src/app/models/TempoDosagem';

@Component({
  selector: 'app-tempos-dosagem',
  templateUrl: './tempos-dosagem.component.html',
  styleUrls: ['./tempos-dosagem.component.scss']
})
export class TemposDosagemComponent implements OnInit {
  numLote = '';
  isLoading: boolean;
  temposDosagem: TempoDosagem[];
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

  consultarTemposDosagem() {
    this.isLoading = true;
    this.svc.getTemposDosagem(this.numLote).subscribe(data => {
      this.isLoading = false;
      this.temposDosagem = data.Response;
    });
  }

  imprimeExcel(){
    this.isGerandoExcel = true;
    this.svc.getTemposDosagemExcel(this.numLote).subscribe(file => {
      window.open(window.URL.createObjectURL(file));
      this.isGerandoExcel = false;
    });
  }
}
