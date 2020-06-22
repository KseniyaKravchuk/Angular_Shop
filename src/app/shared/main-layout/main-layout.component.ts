import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  type = 'allProducts';

  constructor(
    private router: Router,
    private productServ: ProductService
  ) {

  }

  ngOnInit(): void {
  }

  setType(type) {
    this.type = type;
    console.log(this.type)
    console.log(type)

    if (this.type !== 'Cart') {
      if (this.type == 'allProducts') {
        this.router.navigate(['/'])
      } else {
        console.log('Hi' + this.type )
        this.router.navigate(['/'], {
          queryParams: {
            type: this.type
          }
        })
      }
    }
    this.productServ.setType(type)
  }

}
