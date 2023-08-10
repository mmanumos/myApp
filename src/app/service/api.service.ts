import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoDTO, Producto, ProductoDTO, RequestResult } from '../models/myAppModels';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "https://localhost:7033/";

  constructor(private http: HttpClient) { }

  public getProductos(idProducto?:number){    
    const params = new HttpParams({fromObject: {IdProducto: idProducto}});
    return this.http.get<RequestResult<ProductoDTO[]>>(this.urlApi + "getProductos", {params});
  }

  public getDescuento(cantidad:number){    
    const params = new HttpParams({fromObject: {cantidad: cantidad}});
    return this.http.get<RequestResult<number>>(this.urlApi + "getDescuento", {params});
  }

  public newPedido(pedidoDto:PedidoDTO){   
    //const params = new HttpParams(pedidoDto);
    return this.http.post<RequestResult<PedidoDTO>>(this.urlApi + "newPedido", pedidoDto);
  }

  public getPedidos(idPedido?:number){    
    const params = new HttpParams({fromObject: {IdPedido: idPedido}});
    return this.http.get<RequestResult<PedidoDTO[]>>(this.urlApi + "getPedidos", {params});
  }

}
