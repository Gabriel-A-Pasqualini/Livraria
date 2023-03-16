import { NgModule } from '@angular/core';
import { TemposMisturaComponent } from './tempos-mistura.component';
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
    TemposMisturaComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    TemposMisturaComponent
  ]
})
export class TemposMisturaModule { }
