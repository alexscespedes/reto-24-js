class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        }
    
        addToCart() {
        throw new Error(
            "La lógica de este método debe ser implementada por las clases hijas"
        );
        }
    }

class Article extends Product {
    addToCart() {
        console.log(`Agregando ${this.quantity} unidades del articulo ${this.name} al carrito`);
    }
    }

    class Service extends Product {
    addToCart() {
        console.log(`Agregando el servicio ${this.name} al carrito`);
    }
    }

    class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        product.addToCart();
        this.products.push(product);
    }

    deleteProduct(product) {
        this.products = this.products.filter((item) => item.name !== product.name);
    }

    calculateTotal() {
        const total = this.products.reduce(
        (sum, currentItem) => currentItem.price * currentItem.quantity + sum,
        0
        );
        console.log(total); 
    }
    
    getProducts(){
        console.log(this.product); 
    }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();