import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
//declare let alertify:any; //sistemdeki js dosyalarını tarar alertify ı bulur service için
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AlertifyService, ProductService], //local olması için buraya yazılması gerek
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productservice: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [];

  //any ne gelirse gelsin tip olarak

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productservice.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addtoCart(product: Product) {
    this.alertifyService.success(
      product.name + ' added. Price: ' + product.price
    );
  }
}
