import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FifoRoutingModule } from './fifo-routing.module';

import { FifoComponent } from './fifo.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/helpers/date.pipe';
import { HelpersModule } from 'src/app/helpers/helpers.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    FifoRoutingModule,
  
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FifoComponent
  ],
  providers: [DateFormatPipe],
  exports: [
    FifoComponent
  ]
})
export class FifoModule { }
