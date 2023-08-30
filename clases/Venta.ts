import { Producto } from './Producto';
import { ProductoPedido } from './ProductoPedido';

export class Venta{
    private numeroVenta:number;
    private idCliente:number;
    private numeroFactura: number;
    private costoTotal:number;
    private isSaldada: boolean;
    private productosVendidos:ProductoPedido[]=new Array();

    //Constructor
    public constructor(numeroVenta:number, idCliente:number, numeroFactura:number, costoTotal:number, isSaldada:boolean){
        this.numeroVenta=numeroVenta;
        this.idCliente=idCliente;
        this.numeroFactura=numeroFactura;
        this.costoTotal=costoTotal;
        this.isSaldada=isSaldada;

    }
    //getter y setters
    public getNumeroVenta():number{
        return this.numeroVenta;
    }
    public setNumeroVenta(nuevoNumVenta){
        this.numeroVenta=nuevoNumVenta;
    }

    //métodos
    public agregarProdVendido(producto:ProductoPedido){
        if(this.isSaldada){
            this.productosVendidos.push(producto);
        }
    }
    public mostrarProductosVendidos(){
        this.productosVendidos.forEach(
           p=>{
            console.log("En la venta número: ", this.numeroVenta, " se vendió: ",p.getNombre(), p.getCodigo());
           }
        )
       
    }
}