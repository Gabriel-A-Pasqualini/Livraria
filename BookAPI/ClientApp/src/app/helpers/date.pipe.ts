import { PipeTransform, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'date'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: Date, args?: any) {
        const datePipe = new DatePipe('pt-BR');
        return datePipe.transform(value, args);
    }
}
