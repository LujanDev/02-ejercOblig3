import { Producto } from "./Producto";

export class ProductoPedido extends Producto{
    private idPedido:number;
    private idVenta:number;
    private cantidadPedida:number;

    //constructor
    public constructor(id:number, nombre:string, marca:string,
        codigo:string, precio:number, cantidad:number, descripcion:string, idPedido:number, idVenta:number, cantidadPedida:number){
     super(id, nombre, marca, codigo, precio, cantidad, descripcion);
     this.idPedido=idPedido;
     this.idVenta=idVenta;
     this.cantidadPedida=cantidadPedida;
    }
    //getters y setters
    public getIdPedido():number{
        return this.idPedido;
    }
    public getIdVenta():number{
        return this.idVenta;
    }
    public getCantidadPedida():number{
        return this.cantidadPedida;
    }
    public setCantidadPedida(nuevaCantidad:number){
        this.cantidadPedida=nuevaCantidad;
    }
    //método
    public calcularCostoTotal(){
        let costoTotal=this.cantidadPedida*this.getPrecio();
        console.log("El costo total de ",this.getNombre()," es: ",costoTotal);
    }
    
    
}