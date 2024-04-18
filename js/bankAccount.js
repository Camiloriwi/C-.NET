"use strict";
class CuentaBancaria {
    constructor(numeroCuenta, saldo, titular) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.titular = titular;
    }
    depositar(monto) {
        this.saldo += monto;
    }
    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        }
        else {
            console.log("Saldo insuficiente para retirar esa cantidad.");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const cuenta1 = new CuentaBancaria("123456", 100000, "Juan Pérez");
const cuenta2 = new CuentaBancaria("987654", 50000, "María Gómez");
cuenta1.depositar(20000);
cuenta2.retirar(1000);
console.log(`Saldo de ${cuenta1.titular}: $${cuenta1.consultarSaldo()}`);
console.log(`Saldo de ${cuenta2.titular}: $${cuenta2.consultarSaldo()}`);
