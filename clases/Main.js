"use strict";
exports.__esModule = true;
var Producto_1 = require("./Producto");
var Venta_1 = require("./Venta");
var ProductoPedido_1 = require("./ProductoPedido");
//Armo mi stock
var galletitas9DeOro = new Producto_1.Producto(33, "galletitas dulces", "9 de oro", "ejk12345", 245, 25, "200grs");
var alfajorTerrabusi = new Producto_1.Producto(25, "alfajor triple", "Terrabusi", "ljm17341", 350, 15, "Chocolate");
var gaseosa = new Producto_1.Producto(13, "gaseosa en lata", "Coca-Cola", "slt12380", 220, 18, "200ml");
var agua = new Producto_1.Producto(7, "agua mineral", "Villavicencio", "ztd84670", 280, 31, "500ml");
alfajorTerrabusi.productosComprados(5);
console.log("La cantidad disponible es: ", alfajorTerrabusi.getCantidad());
alfajorTerrabusi.productosVendidos(18);
console.log("La  cantidad disponible es: ", alfajorTerrabusi.getCantidad());
//Productos Pedidos es para indicar la cantidad de lo que se está vendiendo
var gallet9DeOro = new ProductoPedido_1.ProductoPedido(33, "galletitas dulces", "9 de oro", "ejk12345", 245, 25, "200grs", 35, 36, 2);
var gaseosaCoca = new ProductoPedido_1.ProductoPedido(13, "gaseosa en lata", "Coca-Cola", "slt12380", 220, 18, "200ml", 35, 36, 1);
//Venta
//Acá se está utilizando el producto que está en stock con la cantidad inventariada y no la de la venta
var venta1 = new Venta_1.Venta(25, 23, 12, 490, true);
venta1.agregarProdVendido(gallet9DeOro);
gallet9DeOro.calcularCostoTotal();
venta1.agregarProdVendido(gaseosaCoca);
venta1.mostrarProductosVendidos();
