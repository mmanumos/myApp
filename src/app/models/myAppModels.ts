//Modelos Genéricos
export class RequestResult<T> {

    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
    messages: string[];
    result: T;
  
    constructor() {
      this.isSuccess = false;
      this.isError = false;
      this.errorMessage = '';
      this.messages = [];
      this.result = null;
    }
}

//DTOs
export class ProductoDTO {
    idProducto: number;
    nombre: string;
    descripcion: string;
    valorUnitario: number;
    fechaRegistro: Date;
    cantidadStock: number;
    dptoVentaNombre: string;
    colorNombre: string;
}

export class PedidoDTO{
    idPedido: number | null;
    nroDocumento: number;
    direccion:string;
    totalSinDescuento: number;
    descuento: number;
    total:number;
    cantidaProductos: number;
    fechaRegistro: Date;
    pedidoDetalleDto:PedidoDetalleDTO[] = [];

    constructor(idPedido: number = 0, nroDocumento: number = 0, direccion:string = "", totalSinDescuento: number = 0,
                descuento: number = 0, total:number = 0, cantidaProductos: number = 0, fechaRegistro:Date = new Date(), pedidoDetalleDto: PedidoDetalleDTO[] = []){
        this.idPedido = idPedido
        this.nroDocumento = nroDocumento;
        this.direccion = direccion;
        this.totalSinDescuento = totalSinDescuento;
        this.descuento = descuento;
        this.total = total;
        this.cantidaProductos = cantidaProductos;
        this.fechaRegistro = fechaRegistro;
        this.pedidoDetalleDto = pedidoDetalleDto;        
    }
}


export class PedidoDetalleDTO{
    idProducto: number;
    nombreProducto: string;
    cantidad: number;
    valorUnitario: number;
    valorTotal: number;

    constructor(idProducto:number = 0, nombreProducto: string = "", cantidad: number = 0,
             valorUnitario: number = 0, valorTotal: number = 0) 
    {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.valorUnitario = valorUnitario;
        this.valorTotal = valorTotal;        
    }
}

//Modelos de la base de datos
export class Producto {
    idProducto: number = 0;
    nombre: string | null = null;
    descripcion: string | null = null;
    valorUnitario: number | null = null;
    fechaRegistro: Date | null = null;
    cantidadStock: number = 0;
    dptoVenta: number = 0;
    color: number = 0;
    //colorNavigation: TipoDetalle = null!;
    //dptoVentaNavigation: DepartamentoVentum = null!;
    //pedidoDetalles: PedidoDetalle[] = [];
}

export class Cliente {
    idCliente: number;
    nombre: string | null;
    apellido: string | null;
    correoElectronico: string | null;
    tipoDocumento: number | null;
    noDocumento: number | null;
    //tipoDocumentoNavigation: TipoDetalle | null;
    //pedidos: Pedido[] = [];
}

