import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bag } from '../models/Bag';
import { FrmLote } from '../models/FrmLote';
import { FrmLoteHistorico } from '../models/FrmLoteHistorico';
import { FrmLoteFifo } from '../models/FrmLoteFifo';
import { FrmLoteProducao } from '../models/FrmLoteProducao';
import { FrmLoteDetalhe } from '../models/frmLoteDetalhe';
import { DiferencaSaldo } from '../models/DiferencaSaldo';
import { LotePRDPendente } from '../models/LotePRDPendente';
import { AjusteLotePRD } from '../models/AjusteLotePRD';
import { RetornoProc } from '../models/RetornoProc';
import { TempoDosagem } from '../models/TempoDosagem';
import { TempoMistura } from '../models/TempoMistura';
import { TempoMoagemBatida } from '../models/TempoMoagemBatida';


@Injectable({ providedIn: 'root' })
export class LoteService {

  constructor(private http: HttpClient) { }

  getFrmLote(lote: string): Observable<Bag<FrmLote>> {
    return this.http.get<Bag<FrmLote>>(`${environment.apiUrl}/lote?lote=${lote || ''}`);
  }

  getLotesPRDPendentes(): Observable<Bag<LotePRDPendente[]>> {
    return this.http.get<Bag<LotePRDPendente[]>>(`${environment.apiUrl}/lote/prd`);
  }

  getLotesPRDPendentesExcel(): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Relatorio/prdExcel`, {responseType: 'blob'});
  }

  getDiferencaSaldo(lote: string, item: string): Observable<Bag<DiferencaSaldo[]>> {
    return this.http.get<Bag<DiferencaSaldo[]>>(`${environment.apiUrl}/lote/diferencasaldo?lote=${lote || ''}&item=${item || ''}`);
  }

  getDiferencaSaldoExcel(lote: string, item: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Relatorio/diferencasaldoExcel?lote=${lote || ''}&item=${item || ''}`, {responseType: 'blob'});
  }

  getFrmLoteProducao(lote: string): Observable<Bag<FrmLoteProducao>> {
    return this.http.get<Bag<FrmLoteProducao>>(`${environment.apiUrl}/lote/producao?lote=${lote || ''}`);
  }

  getFrmLoteHistorico(lote: string): Observable<Bag<FrmLoteHistorico[]>> {
    return this.http.get<Bag<FrmLoteHistorico[]>>(`${environment.apiUrl}/lote/historico?lote=${lote || ''}`);
  }

  getFrmDetalhe(lote: string): Observable<Bag<FrmLoteDetalhe>> {
    return this.http.get<Bag<FrmLoteDetalhe>>(`${environment.apiUrl}/lote/detalhe?lote=${lote || ''}`);
  }

  getFrmLoteFifo(item: string): Observable<Bag<FrmLoteFifo[]>> {
    return this.http.get<Bag<FrmLoteFifo[]>>(`${environment.apiUrl}/lote/fifo?item=${item || ''}`);
  }

  ajustarLotePRD(ajuste: AjusteLotePRD): Observable<Bag<RetornoProc>> {
    return this.http.post<Bag<RetornoProc>>(`${environment.apiUrl}/lote/prd/associar`, ajuste);
  }

  getTemposDosagem(lote: string): Observable<Bag<TempoDosagem[]>> {
    return this.http.get<Bag<TempoDosagem[]>>(`${environment.apiUrl}/lote/temposdosagem?lote=${lote || ''}`);
  }

  getTemposDosagemExcel(lote: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Relatorio/temposdosagemExcel?lote=${lote || ''}`, {responseType: 'blob'});
  }

  getTemposMistura(lote: string): Observable<Bag<TempoMistura[]>> {
    return this.http.get<Bag<TempoMistura[]>>(`${environment.apiUrl}/lote/temposmistura?lote=${lote || ''}`);
  }

  getTemposMisturaExcel(lote: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Relatorio/temposmisturaExcel?lote=${lote || ''}`, {responseType: 'blob'});
  }

  getTemposMoagemBatida(lote: string): Observable<Bag<TempoMoagemBatida[]>> {
    return this.http.get<Bag<TempoMoagemBatida[]>>(`${environment.apiUrl}/lote/temposmoagembatida?lote=${lote || ''}`);
  }

  getTemposMoagemBatidaExcel(lote: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/Relatorio/temposmoagembatidaExcel?lote=${lote || ''}`, {responseType: 'blob'});
  }
}
