import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/product.service";
import {switchMap} from "rxjs/internal/operators/switchMap";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product$
  constructor(
    private route: ActivatedRoute,
    private ProductServ: ProductService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap ( params => {
        return this.ProductServ.getById(params['id'])
      }))
  }

}
