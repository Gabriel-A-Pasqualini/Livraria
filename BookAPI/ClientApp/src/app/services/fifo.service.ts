import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Bag } from '../models/Bag';
import { FrmFifoSilosArmazem } from '../models/FrmFifoSilosArmazem';
import { FrmFifoSilosEndereco } from '../models/FrmFifoSilosEndereco';
import { FrmFifoSilosSilo } from '../models/FrmFifoSilosSilo';


@Injectable({ providedIn: 'root' })
export class FifoService {
  constructor(private http: HttpClient) { }

  getFifoArmazem(item: string): Observable<Bag<FrmFifoSilosArmazem[]>> {
    return this.http.get<Bag<FrmFifoSilosArmazem[]>>(`${environment.apiUrl}/fifo/armazem?item=${item || ''}`);
  }
  
  getFifoSilo(item: string): Observable<Bag<FrmFifoSilosSilo[]>> {
    return this.http.get<Bag<FrmFifoSilosSilo[]>>(`${environment.apiUrl}/fifo/silo?item=${item || ''}`);
  }
  
  getFifoEndereco(lote: string): Observable<Bag<FrmFifoSilosEndereco[]>> {
    return this.http.get<Bag<FrmFifoSilosEndereco[]>>(`${environment.apiUrl}/fifo/endereco?lote=${lote || ''}`);
  }
}
