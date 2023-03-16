import { KardexComponent } from './pages/kardex/kardex.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { LoteComponent } from './pages/lote/lote.component';
import { FifoComponent } from './pages/fifo/fifo.component';
import { DiferencaSaldoComponent } from './pages/diferenca-saldo/diferenca-saldo.component';
import { ConsultaLotePrdComponent } from './pages/consulta-lote-prd/consulta-lote-prd.component';
import { TemposDosagemComponent } from './pages/tempos-dosagem/tempos-dosagem.component';
import { TemposMisturaComponent } from './pages/tempos-mistura/tempos-mistura.component';
import { TemposMoagemBatidaComponent } from './pages/tempos-moagem-batida/tempos-moagem-batida.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    component: LoteComponent,
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/lote/lote.module').then(m => m.LoteModule)
  },
  { path: 'login', component: LoginComponent },

  {
    canActivate: [AuthGuard],
    component: LoteComponent,
    path: 'lote',
    loadChildren: () => import('./pages/lote/lote.module').then(m => m.LoteModule)
  },
  {
    canActivate: [AuthGuard],
    component: FifoComponent,
    path: 'fifo',
    loadChildren: () => import('./pages/fifo/fifo.module').then(m => m.FifoModule)
  },
  {
    canActivate: [AuthGuard],
    component: DiferencaSaldoComponent,
    path: 'diferenca-saldo',
    loadChildren: () => import('./pages/diferenca-saldo/diferenca-saldo.module').then(m => m.DiferencaSaldoModule)
  },
  {
    canActivate: [AuthGuard],
    component: ConsultaLotePrdComponent,
    path: 'lote-prd',
    loadChildren: () => import('./pages/consulta-lote-prd/consulta-lote-prd.module').then(m => m.ConsultaLotePrdModule)
  },
  {
    canActivate: [AuthGuard],
    component: KardexComponent,
    path: 'kardex',
    loadChildren: () => import('./pages/kardex/kardex.module').then(m => m.KardexModule)
  },
  {
    canActivate: [AuthGuard],
    component: TemposDosagemComponent,
    path: 'tempos-dosagem',
    loadChildren: () => import('./pages/tempos-dosagem/tempos-dosagem.module').then(m => m.TemposDosagemModule)
  },
  {
    canActivate: [AuthGuard],
    component: TemposMisturaComponent,
    path: 'tempos-mistura',
    loadChildren: () => import('./pages/tempos-mistura/tempos-mistura.module').then(m => m.TemposMisturaModule)
  },
  {
    canActivate: [AuthGuard],
    component: TemposMoagemBatidaComponent,
    path: 'tempos-moagem-batida',
    loadChildren: () => import('./pages/tempos-moagem-batida/tempos-moagem-batida.module').then(m => m.TemposMoagemBatidaModule)
  },
  { path: '**', redirectTo: '/lote' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
