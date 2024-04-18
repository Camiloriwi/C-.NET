"use strict";
class ProductImplementado {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const myProduct = new ProductImplementado("Camiseta", 29.999, "Ropa");
console.log(`name: ${myProduct.name}, price: $${myProduct.price}, Categoría: ${myProduct.category}`);
