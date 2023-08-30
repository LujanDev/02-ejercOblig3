"use strict";
exports.__esModule = true;
exports.Venta = void 0;
var Venta = /** @class */ (function () {
    //Constructor
    function Venta(numeroVenta, idCliente, numeroFactura, costoTotal, isSaldada) {
        this.productosVendidos = new Array();
        this.numeroVenta = numeroVenta;
        this.idCliente = idCliente;
        this.numeroFactura = numeroFactura;
        this.costoTotal = costoTotal;
        this.isSaldada = isSaldada;
    }
    //getter y setters
    Venta.prototype.getNumeroVenta = function () {
        return this.numeroVenta;
    };
    Venta.prototype.setNumeroVenta = function (nuevoNumVenta) {
        this.numeroVenta = nuevoNumVenta;
    };
    //métodos
    Venta.prototype.agregarProdVendido = function (producto) {
        if (this.isSaldada) {
            this.productosVendidos.push(producto);
        }
    };
    Venta.prototype.mostrarProductosVendidos = function () {
        var _this = this;
        this.productosVendidos.forEach(function (p) {
            console.log("En la venta número: ", _this.numeroVenta, " se vendió: ", p.getNombre(), p.getCodigo());
        });
    };
    return Venta;
}());
exports.Venta = Venta;
