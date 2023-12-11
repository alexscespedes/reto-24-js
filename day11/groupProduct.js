function groupProducts(products, category) {
    const filteredProducts = products.filter(
        (product) => product.category === category
        );
    
        const productsName = filteredProducts
        .map((product) => product.name)
        .join(", ");
    
        const totalPrice = filteredProducts.reduce(
        (total, product) => total + product.price,
        0
        );
    
        console.log({
            products: productsName,
            totalPrice,
            })
    }
    
    const products = [
        { name: "Smartphone", category: "Electronics", price: 800 },
        { name: "Laptop", category: "Electronics", price: 1200 },
        { name: "Shirt", category: "Clothing", price: 50 },
        { name: "Pants", category: "Clothing", price: 100 },
        ];
        
        groupProducts(products, "Clothing")