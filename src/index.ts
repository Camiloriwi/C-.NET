
// 1. *Interfaz para representar un producto:*

interface Product {
    name: string;
    price: number;
    category: string;
}

class ProductImplementado implements Product {
    constructor(public name: string, public price: number, public category: string) {}
}

const myProduct: Product = new ProductImplementado("Camiseta", 29.999, "Ropa");
console.log(`name: ${myProduct.name}, price: $${myProduct.price}, Categoría: ${myProduct.category}`);


// 2. *Clase para representar una cuenta bancaria:*

class CuentaBancaria {
    constructor(public numeroCuenta: string, public saldo: number, public titular: string) {}

    depositar(monto: number): void {
        this.saldo += monto;
    }

    retirar(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente para retirar esa cantidad.");
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta1 = new CuentaBancaria("123456", 100000, "Juan Pérez");
const cuenta2 = new CuentaBancaria("987654", 50000, "María Gómez");
const cuenta3 = new CuentaBancaria("123456", 100000, "lina beltran");
const cuenta4 = new CuentaBancaria("987654", 50000, "cristian correa");

cuenta1.depositar(20000);
cuenta2.retirar(1000);
console.log(`Saldo de ${cuenta1.titular}: $${cuenta1.consultarSaldo()}`);
console.log(`Saldo de ${cuenta2.titular}: $${cuenta2.consultarSaldo()}`);




// 3. *Función para verificar si una cadena es un palíndromo:*

function esPalindromo(cadena: string): boolean {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s/g, "");
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaInvertida;
}

const ejemploUno = "Anita lava la tina";
const ejemploDos = "reconocer"
console.log(`"${ejemploUno}" es un palíndromo: ${esPalindromo(ejemploUno)}`);


// 4. *Ejercicios adicionales:*


// "outDir": "js",   "include": ["src/**/*"],
//   "exclude": ["node_modules", "**/*.spec.ts"]

