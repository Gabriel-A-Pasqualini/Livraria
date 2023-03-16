import { NgModule } from '@angular/core';
import { DiferencaSaldoComponent } from './diferenca-saldo.component';
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
    DiferencaSaldoComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    DiferencaSaldoComponent
  ]
})
export class DiferencaSaldoModule { }
