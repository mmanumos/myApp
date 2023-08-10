import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PedidoDTO, ProductoDTO } from '../models/myAppModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  pedidosLista: PedidoDTO[] = [];

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos(){
    this.apiService.getPedidos().subscribe(response => {
      this.pedidosLista = response.result;
    });    
  }

  //Redirect to form Pedido
  newPedido(){
    this.router.navigate(['form-pedido']);
  }


}
