import { LoteService } from '../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { DiferencaSaldo } from 'src/app/models/DiferencaSaldo';

@Component({
  selector: 'app-diferenca-saldo',
  templateUrl: './diferenca-saldo.component.html',
  styleUrls: ['./diferenca-saldo.component.scss']
})
export class DiferencaSaldoComponent implements OnInit {
  numLote = '';
  codItem = '';
  isLoading: boolean;
  diferencasSaldo: DiferencaSaldo[];
  isGerandoExcel = false;

  constructor(
    private svc: LoteService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.numLote = this.route.snapshot.queryParamMap.get('lote');
      this.codItem = this.route.snapshot.queryParamMap.get('item');
    }

  ngOnInit(): void {
  }

  consultarDiferencaSaldo() {
    this.isLoading = true;
    this.svc.getDiferencaSaldo(this.numLote, this.codItem).subscribe(data => {
      this.isLoading = false;
      this.diferencasSaldo = data.Response;
    });
  }

  imprimeExcel(){
    this.isGerandoExcel = true;
    this.svc.getDiferencaSaldoExcel(this.numLote, this.codItem).subscribe(file => {
      window.open(window.URL.createObjectURL(file));
      this.isGerandoExcel = false;
    });
  }
}
