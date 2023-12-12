function sortByAvailabilityAndPrice(products) {
    const copy = [...products];
    
        copy.sort((a, b) => {
        if (a.inStock === b.inStock) {
            return a.price - b.price;
        } else {
            return a.inStock ? -1 : 1;
        }
        });
    
        console.log(copy)
    }

    const products = [
        { name: "product1", price: 10, inStock: true },
        { name: "product2", price: 20, inStock: false },
        { name: "product3", price: 15, inStock: true },
        { name: "product4", price: 5, inStock: true },
      ]
      
      sortByAvailabilityAndPrice(products)