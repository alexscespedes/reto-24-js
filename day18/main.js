    class Product {
    // Este código no debe ser editado ❌
    constructor(price) {
        this.price = price;
        }
    
        getPrice() {
        return this.price;
        }
    
        getDescription() {
        throw new Error("Este método debe ser implementado en las subclases");
        }
    }
    

    class BasicProduct extends Product {
    constructor(price, description) {
        super(price);
        this.description = description;
        }
    
        getDescription() {
        return this.description;
        }
    }

    
    class ShippingInsuranceDecorator extends Product {
    constructor(product) {
        super(product);
        this.product = product;
        }
    
        getPrice() {
        return this.product.getPrice() + 20;
        }
    
        getDescription() {
        return `${this.product.getDescription()} con seguro de envío`;
        }
    }

    class WarrantyDecorator extends Product {
        constructor(product) {
            super(product);
            this.product = product;
            }
        
            getPrice() {
            return this.product.getPrice() + 20;
            }
        
            getDescription() {
            return `${this.product.getDescription()} con garantía`;
            }
        }

        const basicProduct = new BasicProduct(5000, "Refrigerador");
        const withWarranty = new WarrantyDecorator(basicProduct);
        console.log(withWarranty.getPrice());
        console.log(withWarranty.getDescription());