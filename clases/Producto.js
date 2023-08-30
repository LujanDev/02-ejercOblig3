"use strict";
exports.__esModule = true;
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(id, nombre, marca, codigo, precio, cantidad, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        if (this.cantidad > 0) {
            this.isDisponible = true;
        }
    }
    //getters y setters
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo;
    };
    Producto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Producto.prototype.setCodigo = function (codigoNuevo) {
        this.codigo = codigoNuevo;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (precioNuevo) {
        this.precio = precioNuevo;
    };
    Producto.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Producto.prototype.setCantidad = function (nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    };
    Producto.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Producto.prototype.setDescripcion = function (nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    };
    //métodos
    Producto.prototype.productosComprados = function (cantidad) {
        this.cantidad = this.cantidad + cantidad;
    };
    Producto.prototype.productosVendidos = function (cantidad) {
        if (this.isDisponible && this.cantidad >= cantidad) {
            this.cantidad = this.cantidad - cantidad;
        }
    };
    Producto.prototype.ofrecerProducto = function () {
        if (this.isDisponible) {
            this.productosAOfrecer.push(this.nombre, this.codigo);
        }
        console.log("Los productos disponibles son: ", this.productosAOfrecer);
    };
    return Producto;
}());
exports.Producto = Producto;
