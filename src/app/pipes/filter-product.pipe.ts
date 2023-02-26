import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] { console.log(products,search )
   if (search.length === 0) return products;
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
