import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null; //filterText var mı varsa küçük harfe çevir

    return filterText
      ? value.filter(
          (p: Product) =>
            p.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            p.description.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
