function processShoppingList(list) {
    list.forEach((item) => {
        if (item.name.includes("oferta")) {
          item.price = item.price - item.price * 0.2;
        }
    
        item.price = item.price * item.quantity;
    
        delete item.quantity;
        });
        
        const total = list.reduce((totalPrice, item) => totalPrice + item.price, 0);
        
        console.log(total);
    }

    const shoppingList = [
        { name: "pan", price: 20, quantity: 2 },
        { name: "leche", price: 25, quantity: 1 },
        { name: "oferta manzanas", price: 10, quantity: 3 },
        ]
        
        processShoppingList(shoppingList)
        
        console.log(shoppingList)