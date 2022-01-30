import { Pipe, PipeTransform } from '@angular/core';
import { Finance } from '../models/finance.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: Finance[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;
    return items.filter((el: Finance) =>
      el.description.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
