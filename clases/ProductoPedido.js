"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ProductoPedido = void 0;
var Producto_1 = require("./Producto");
var ProductoPedido = /** @class */ (function (_super) {
    __extends(ProductoPedido, _super);
    //constructor
    function ProductoPedido(id, nombre, marca, codigo, precio, cantidad, descripcion, idPedido, idVenta, cantidadPedida) {
        var _this = _super.call(this, id, nombre, marca, codigo, precio, cantidad, descripcion) || this;
        _this.idPedido = idPedido;
        _this.idVenta = idVenta;
        _this.cantidadPedida = cantidadPedida;
        return _this;
    }
    //getters y setters
    ProductoPedido.prototype.getIdPedido = function () {
        return this.idPedido;
    };
    ProductoPedido.prototype.getIdVenta = function () {
        return this.idVenta;
    };
    ProductoPedido.prototype.getCantidadPedida = function () {
        return this.cantidadPedida;
    };
    ProductoPedido.prototype.setCantidadPedida = function (nuevaCantidad) {
        this.cantidadPedida = nuevaCantidad;
    };
    //método
    ProductoPedido.prototype.calcularCostoTotal = function () {
        var costoTotal = this.cantidadPedida * this.getPrecio();
        console.log("El costo total de ", this.getNombre(), " es: ", costoTotal);
    };
    return ProductoPedido;
}(Producto_1.Producto));
exports.ProductoPedido = ProductoPedido;
