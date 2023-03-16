import { RetornoProc } from './../models/RetornoProc';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Bag } from '../models/Bag';
import { KardexAnalitic } from '../models/KardexAnalitic';
import { AjusteManualViewModel } from '../models/AjusteManual';


@Injectable({ providedIn: 'root' })
export class KardexService {
  constructor(private http: HttpClient) { }

  getKardexAnilitc(lote: string): Observable<Bag<KardexAnalitic[]>> {
    return this.http.get<Bag<KardexAnalitic[]>>(`${environment.apiUrl}/kardex/kardexAnalitic?lote=${lote || ''}`);
  }

  ajusteSaldo(model: AjusteManualViewModel): Observable<Bag<RetornoProc>> {

    return this.http.post<Bag<RetornoProc>>(`${environment.apiUrl}/kardex/ajusteSaldo`, model);
  }

  getKardexAnilitcExcel(lote: string): Observable<Blob> {

    return this.http.get(`${environment.apiUrl}/Relatorio/kardexExcel?lote=${lote || ''}`, {responseType: 'blob'});
  }

}
