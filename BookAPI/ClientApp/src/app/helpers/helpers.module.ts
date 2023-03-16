import { DateDimensionComponent } from './date-dimension.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { DateFormatPipe } from './date.pipe';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    DateFormatPipe,
    DateDimensionComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    DateFormatPipe,
    DateDimensionComponent,
    NgZorroAntdModule
  ]
})
export class HelpersModule {}
