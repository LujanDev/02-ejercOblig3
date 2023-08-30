export class Producto{
    private id: number;
    private nombre:string;
    private marca:string;
    private codigo:string;
    private precio:number;
    private cantidad:number;
    private descripcion: string;
    private isDisponible:boolean;
    private productosAOfrecer:string[];

    public constructor(id:number, nombre:string, marca:string,
         codigo:string, precio:number, cantidad:number, descripcion:string){
            this.id=id;
            this.nombre=nombre;
            this.marca=marca;
            this.codigo=codigo;
            this.precio=precio;
            this.cantidad=cantidad;
            this.descripcion=descripcion;
            if(this.cantidad>0){
                this.isDisponible=true;
            }
    }
    //getters y setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombreNuevo:string){
        this.nombre=nombreNuevo;
    }
    public getCodigo():string{
        return this.codigo;
    }
    public setCodigo(codigoNuevo:string){
        this.codigo=codigoNuevo;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setPrecio(precioNuevo:number){
        this.precio=precioNuevo;
    }
    public getCantidad():number{
        return this.cantidad;
    }
    public setCantidad(nuevaCantidad:number){
        this.cantidad=nuevaCantidad;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
    public setDescripcion(nuevaDescripcion:string){
        this.descripcion=nuevaDescripcion;
    }
    //métodos
    public productosComprados(cantidad:number){
        this.cantidad=this.cantidad+cantidad;
    }
    public productosVendidos(cantidad:number){
        if(this.isDisponible && this.cantidad>=cantidad){
        this.cantidad=this.cantidad-cantidad;}
    }

    public ofrecerProducto(){
        if(this.isDisponible){
            this.productosAOfrecer.push(this.nombre, this.codigo);
        }
        console.log("Los productos disponibles son: ",this.productosAOfrecer);
    }


}