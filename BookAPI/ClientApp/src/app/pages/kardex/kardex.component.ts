import { Observable, Subscription } from 'rxjs';
import { KardexAnalitic } from './../../models/KardexAnalitic';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KardexService } from 'src/app/services/kardex.service';
import { NzModalService } from 'ng-zorro-antd';
import { ClassMethod } from '@angular/compiler';
import { AjusteManualViewModel } from 'src/app/models/AjusteManual';

import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  isVisible = false;
  numLote = '';
  isLoading: boolean;
  kardexAnalitic:KardexAnalitic[] = [];
  ModalAjusteManualViewModel:AjusteManualViewModel = new AjusteManualViewModel();
  isGerandoExcel = false;

  constructor( private svc: KardexService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NzNotificationService) {
      this.numLote = this.route.snapshot.queryParamMap.get('lote');
    }

  ngOnInit(): void {
  }

  consultarKardexAnalitic() {
    this.isLoading = true;
    this.svc.getKardexAnilitc(this.numLote).subscribe(data => {
      this.isLoading = false;
      this.kardexAnalitic = data.Response;
    });
  }

  imprimeExcel() {
    this.isGerandoExcel = true;
    this.svc.getKardexAnilitcExcel(this.numLote).subscribe(file =>
      {
        window.open(window.URL.createObjectURL(file));
        this.isGerandoExcel = false;
      });
  }

  showModal(): void {
    this.ModalAjusteManualViewModel = new AjusteManualViewModel();
    this.ModalAjusteManualViewModel.lote = this.numLote;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.svc.ajusteSaldo(this.ModalAjusteManualViewModel).subscribe(d =>{
      if (d.Response.IesOk) {
        this.notification.success('Ajustado', d.Response.Mensagem);
      } else {
        this.notification.error('Erro', d.Response.Mensagem);
      }
    });
    this.consultarKardexAnalitic();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
