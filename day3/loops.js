function printTriangle(size, character) {
    for (let i = 1; i <= size; i++) {
        let spaces = ' '.repeat(size - i);
        console.log(spaces + character);
        character += character.charAt(0);
        }
    }

printTriangle(6, '$')


// // console.log(5 * "*")

// let size = 5;
// while (size < 10){
//     char = console.log("*\n");
//     char += char;
//     size++
// }