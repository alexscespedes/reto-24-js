function getPetExerciseInfo(type, age) {
    switch (true) {
        case type == "perro" && age < 1:
            console.log("Los cachorros necesitan pequeñas y frecuentes sesiones de juego")
            break;
        case type == "perro" && age >= 1 && age <= 7:
            console.log("Los perros a esta edad necesitan caminatas diarias y sesiones de juego")
            break;
        case type == "perro" && age >= 7:
            console.log("Los perros viejos necesitan caminatas más cortas")
            break;
        case type == "cato" && age < 1:
                console.log("Los catitos necesitan pequeñas y frecuentes sesiones de juego")
                break;
        case type == "cato" && age >= 1 && age <= 7:
                console.log("Los catos a esta edad necesitan caminatas diarias y sesiones de juego")
                break;
        case type == "cato" && age >= 7:
            console.log("Los catos viejos necesitan caminatas más cortas")
            break;
        case type == "ave" && age < 1:
            console.log("Las aves necesitan pequeñas y frecuentes sesiones de juego")
            break;
        case type == "ave" && age >= 1 && age <= 7:
            console.log("Las aves a esta edad necesitan caminatas diarias y sesiones de juego")
            break;
        case type == "ave" && age >= 7:
            console.log("Las aves viejos necesitan caminatas más cortas")
            break;
            default:
                console.log("El valor no cumple con ninguna de las características");
        
    }
    return false
    }


    getPetExerciseInfo("mamut", 8)