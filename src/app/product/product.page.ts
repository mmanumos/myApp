import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Producto, ProductoDTO } from '../models/myAppModels';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  productosLista: ProductoDTO[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.apiService.getProductos().subscribe(response => {
      this.productosLista = response.result;
      console.log("api res ", this.productosLista);
    });
    
  }

}
