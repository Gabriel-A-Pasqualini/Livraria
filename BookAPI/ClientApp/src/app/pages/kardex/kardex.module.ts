import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpersModule } from 'src/app/helpers/helpers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KardexComponent } from './kardex.component';
import { DateFormatPipe } from 'src/app/helpers/date.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    KardexComponent
  ],
  imports: [
    CommonModule,
    HelpersModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,

  ],
  providers: [DateFormatPipe],
  exports: [
    KardexComponent
  ]
})
export class KardexModule { }
