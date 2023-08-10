import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoDTO, PedidoDetalleDTO, ProductoDTO } from 'src/app/models/myAppModels';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.page.html',
  styleUrls: ['./form-pedido.page.scss'],
})
export class FormPedidoPage implements OnInit {
  
  productosLista: ProductoDTO[] = [];
  pedidoDto: PedidoDTO = new PedidoDTO();
  detallePedidoLista: PedidoDetalleDTO[] = [];
  productoSeleccionadoId: number;  
  cantidadProducto: number;  

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.apiService.getProductos().subscribe(response => {
      this.productosLista = response.result;
      console.log("api res ", this.productosLista);
    });    
  }

  agregar(){

    //Valida si ya está agregado el producto en el detalle y solo se modifica la cantidad y los valores
    const productoExiste = this.detallePedidoLista.find(x => x.idProducto == this.productoSeleccionadoId);

    if(productoExiste){
      productoExiste.cantidad += this.cantidadProducto;
      productoExiste.valorTotal = productoExiste.valorUnitario * productoExiste.cantidad;
    }
    else{
      const producto = this.productosLista.find(x => x.idProducto == this.productoSeleccionadoId);
      this.detallePedidoLista.push(new PedidoDetalleDTO(this.productoSeleccionadoId,
                                                      producto.nombre,
                                                      this.cantidadProducto,
                                                      producto.valorUnitario,
                                                      this.cantidadProducto * producto.valorUnitario
                                ));
    }   
    
    this.calculaTotal();
  }

  eliminaDetalle(detalle: PedidoDetalleDTO){
    this.detallePedidoLista = this.detallePedidoLista.filter(x => x.idProducto !== detalle.idProducto);
  }

  calculaTotal(){
    this.pedidoDto.cantidaProductos = this.detallePedidoLista.reduce((total, detalle) => total + detalle.cantidad, 0);
    //this.pedidoDto.descuento = 
    this.pedidoDto.totalSinDescuento = this.detallePedidoLista.reduce((total, detalle) => total + detalle.valorTotal, 0);

    this.apiService.getDescuento(this.pedidoDto.cantidaProductos).subscribe(response => {
      const descuento = response.result;
      this.pedidoDto.descuento = descuento;
      this.pedidoDto.total = this.pedidoDto.totalSinDescuento - ((this.pedidoDto.totalSinDescuento * descuento) / 100);
    });     
  }

  generarPedido(){
    this.pedidoDto.pedidoDetalleDto = this.detallePedidoLista;
    console.log("this.pedidoDto ", this.pedidoDto);
    this.apiService.newPedido(this.pedidoDto).subscribe(response => {
      if(response.isSuccess){
        this.router.navigate(['pedido']);
        console.log("nuevo pedido exito", response);
      }
      
    }); 
  }


}
