import { NgModule } from '@angular/core';
import { TemposDosagemComponent } from './tempos-dosagem.component';
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
    TemposDosagemComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    TemposDosagemComponent
  ]
})
export class TemposDosagemModule { }
