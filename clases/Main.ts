import { Producto } from "./Producto";
import { Venta } from "./Venta";
import { ProductoPedido } from "./ProductoPedido";

//Armo mi stock
let galletitas9DeOro:Producto= new Producto(33, "galletitas dulces", "9 de oro","ejk12345", 245, 25, "200grs" );
let alfajorTerrabusi:Producto=new Producto (25, "alfajor triple", "Terrabusi","ljm17341", 350, 15, "Chocolate" );
let gaseosa:Producto= new Producto (13, "gaseosa en lata", "Coca-Cola", "slt12380", 220, 18, "200ml" );
let agua:Producto= new Producto(7, "agua mineral", "Villavicencio",  "ztd84670", 280, 31, "500ml" );

alfajorTerrabusi.productosComprados(5);
console.log("La cantidad disponible es: ",alfajorTerrabusi.getCantidad());//solo para probar si actualiza el valor de la cantidad
alfajorTerrabusi.productosVendidos(18);
console.log("La  cantidad disponible es: ", alfajorTerrabusi.getCantidad());//solo para probar si actualiza el valor de la cantidad


//Productos Pedidos es para indicar la cantidad de lo que se está vendiendo
let gallet9DeOro:ProductoPedido= new ProductoPedido(33, "galletitas dulces", "9 de oro","ejk12345", 245, 25, "200grs", 35, 36, 2);
let gaseosaCoca: ProductoPedido= new ProductoPedido(13, "gaseosa en lata", "Coca-Cola", "slt12380", 220, 18, "200ml", 35, 36,1);
//Venta
//Acá se está utilizando el producto que está en stock con la cantidad inventariada y no la de la venta
let venta1:Venta= new Venta(25,23, 12, 490, true);
venta1.agregarProdVendido(gallet9DeOro);
gallet9DeOro.calcularCostoTotal();
venta1.agregarProdVendido(gaseosaCoca);
venta1.mostrarProductosVendidos();