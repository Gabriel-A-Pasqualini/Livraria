import { LoteService } from '../../../services/lote.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmLoteDetalhe } from '../../../models/frmLoteDetalhe';

@Component({
  selector: 'app-lote-detalhe',
  templateUrl: './lote-detalhe.component.html',
  styleUrls: ['./lote-detalhe.component.scss']
})
export class LoteDetalheComponent implements OnInit {
  isVisible = false;
  isLoading = false;
  numLote = '';
  detalhe: FrmLoteDetalhe;

  constructor(
    private svc: LoteService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.numLote = this.route.snapshot.queryParamMap.get('lote');
      this.showModal();
      this.carregarDetalhes();
    }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.router.navigateByUrl(`lote?lote=${this.numLote}`);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isVisible = true;
  }

  carregarDetalhes() {
    this.isLoading = true;
    this.svc.getFrmDetalhe(this.numLote).subscribe(data => {
      this.detalhe = data.Response;
      this.isLoading = false;
    });
  }
}


