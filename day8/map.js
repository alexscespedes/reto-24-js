function myMap(array, func) {
    const rta = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        rta.push(func(element));
    }
    return rta;
}

console.log(myMap([1,2,3,4], (num) => num * 2))

console.log(myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name))