"use strict";
// 1. *Interfaz para representar un producto:*
class ProductImplementado {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const myProduct = new ProductImplementado("Camiseta", 29.999, "Ropa");
console.log(`name: ${myProduct.name}, price: $${myProduct.price}, Categoría: ${myProduct.category}`);
// 2. *Clase para representar una cuenta bancaria:*
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
// 3. *Función para verificar si una cadena es un palíndromo:*
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s/g, "");
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaInvertida;
}
const ejemploCadena = "Anita lava la tina";
console.log(`"${ejemploCadena}" es un palíndromo: ${esPalindromo(ejemploCadena)}`);
// 4. *Ejercicios adicionales:* "outDir": "js",   "include": ["src/**/*"],
//   "exclude": ["node_modules", "**/*.spec.ts"]
