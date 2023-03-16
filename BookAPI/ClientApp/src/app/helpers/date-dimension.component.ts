import { Observable, of } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, TemplateRef, ContentChild, Output } from '@angular/core';
import 'moment/locale/pt-br';

@Component({
  selector: 'date-dimension',
  templateUrl: './date-dimension.component.html',
  styleUrls: ['./date-dimension.component.scss']
})
export class DateDimensionComponent implements OnInit {
  @Output() expandChange = new EventEmitter<{event: boolean, dia: any}>();
  @Input() dimData;
  @ContentChild(TemplateRef) templ: TemplateRef<any>;
  constructor() {
  }

  change(event, dia) {
    this.expandChange.emit({event, dia});
  }

  changeExpand(event) {
    this.expandChange.emit(event);
  }

  ngOnInit(): void {
  }
}
