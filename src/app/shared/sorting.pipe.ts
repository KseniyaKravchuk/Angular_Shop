import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./interfaces";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Product[], type = '') {
    console.log('type from pipe', type)
    if (type == 'allProducts') {
      return products
    }
  console.log('HiHi')
    return products.filter( product => {
      console.log('product.type = ' +product.type)
      return product.type == type
    })

  }

}
