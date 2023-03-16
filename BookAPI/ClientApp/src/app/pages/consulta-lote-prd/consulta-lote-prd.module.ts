import { NgModule } from '@angular/core';
import { ConsultaLotePrdComponent } from './consulta-lote-prd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/helpers/date.pipe';
import { HelpersModule } from 'src/app/helpers/helpers.module';
import { CommonModule } from '@angular/common';
import { AjusteLotePrdComponent } from './ajuste/ajuste-lote-prd.component';
import { ConsultaLotePrdRoutingModule } from './consulta-lote-prd-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    FormsModule,
    ConsultaLotePrdRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConsultaLotePrdComponent,
    AjusteLotePrdComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    ConsultaLotePrdComponent
  ]
})
export class ConsultaLotePrdModule { }
