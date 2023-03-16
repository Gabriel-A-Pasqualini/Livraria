import { NgModule } from '@angular/core';
import { TemposMoagemBatidaComponent } from './tempos-moagem-batida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/helpers/date.pipe';
import { HelpersModule } from 'src/app/helpers/helpers.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TemposMoagemBatidaComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    TemposMoagemBatidaComponent
  ]
})
export class TemposMoagemBatidaModule { }
