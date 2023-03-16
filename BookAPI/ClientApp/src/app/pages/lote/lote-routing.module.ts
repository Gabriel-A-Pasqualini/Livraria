import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoteDetalheComponent } from './lote-detalhe/lote-detalhe.component';

const routes: Routes = [
  { path: 'detalhe', component: LoteDetalheComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteRoutingModule { }
