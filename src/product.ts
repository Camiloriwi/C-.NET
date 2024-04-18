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
