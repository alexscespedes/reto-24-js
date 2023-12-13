function protectDog(dog) {
    const copy = Object.assign({}, dog);
    const propertiesToProtect = ["owner", "favoriteFood", "activities"];
    
        function freezeRecursively(obj) {
        Object.freeze(obj);
        for (const prop of Object.getOwnPropertyNames(obj)) {
            if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
            freezeRecursively(obj[prop]);
            }
        }
        }
    
    freezeRecursively(copy);
    console.log(copy);
    }

    protectDog({
        name: "Pedro",
        age: 3,
        owner: { name: "Victor", phoneNumber: "555-555-5555" },
        favoriteFood: ["pollito", "croquetas"],
        activities: ["jugar", "caminar"],
        })