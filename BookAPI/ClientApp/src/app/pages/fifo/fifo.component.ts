import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { ActivatedRoute, Router } from '@angular/router';
import { FifoService } from 'src/app/services/fifo.service';
import { FrmFifoSilosSilo } from 'src/app/models/FrmFifoSilosSilo';
import { FrmFifoSilosArmazem } from 'src/app/models/FrmFifoSilosArmazem';
import { FrmFifoSilosEndereco } from 'src/app/models/FrmFifoSilosEndereco';

@Component({
  selector: 'app-ticket',
  templateUrl: './fifo.component.html',
  styleUrls: ['./fifo.component.scss']
})
export class FifoComponent implements OnInit {
  codItem = '';
  numLote = '';
  isLoadingArmazem: boolean;
  isLoadingSilo: boolean;
  isLoadingEndereco: boolean;
  fifosArmazem: FrmFifoSilosArmazem[];
  fifosSilo: FrmFifoSilosSilo[];
  enderecos: FrmFifoSilosEndereco[];


  constructor(
    private svc: FifoService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.codItem = this.route.snapshot.queryParamMap.get('item');
    }

  ngOnInit(): void {
    this.consultarFifos();
  }

  consultarFifos() {
    this.numLote = null;
    this.consultarFifoArmazem();
    this.consultarFifoSilos();
  }

  consultarFifoArmazem() {
    this.isLoadingArmazem = true;
    this.svc.getFifoArmazem(this.codItem).subscribe(data => {
      this.fifosArmazem = data.Response;
      this.isLoadingArmazem = false;
    });
  }

  consultarFifoSilos() {
    this.isLoadingSilo = true;
    this.svc.getFifoSilo(this.codItem).subscribe(data => {
      this.fifosSilo = data.Response;
      this.isLoadingSilo = false;
    });
  }

  consultarFifoEndereco(numLote: string) {
    this.numLote = numLote;
    this.isLoadingEndereco = true;
    this.svc.getFifoEndereco(numLote).subscribe(data => {
      this.enderecos = data.Response;
      this.isLoadingEndereco = false;
    });
  }
}
