import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoteRoutingModule } from './lote-routing.module';

import { LoteComponent } from './lote.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/helpers/date.pipe';
import { HelpersModule } from 'src/app/helpers/helpers.module';
import { CommonModule } from '@angular/common';
import { LoteDetalheComponent } from './lote-detalhe/lote-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    LoteRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    LoteComponent,
    LoteDetalheComponent],
  providers: [DateFormatPipe],
  exports: [
    LoteComponent
  ]
})
export class LoteModule { }
