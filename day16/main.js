// Exercise made by ChatGPT

// Clase Hotel
class Hotel {
        constructor(nombre, capacidadTotal) {
        this.nombre = nombre;
        this.capacidadTotal = capacidadTotal;
        this.habitaciones = [];
        }
    
        agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
        }
    
        mostrarDisponibilidad() {
        console.log(`Disponibilidad en ${this.nombre}:`);
        this.habitaciones.forEach((habitacion, index) => {
            const estado = habitacion.estaDisponible() ? 'Disponible' : 'Ocupada';
            console.log(`Habitación ${index + 1}: ${estado}`);
        });
        console.log('\n');
        }
    }
    
    // Clase Habitacion
    class Habitacion {
        constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
        this.reservada = false;
        }
    
        estaDisponible() {
        return !this.reservada;
        }
    
        reservar() {
        if (this.estaDisponible()) {
            this.reservada = true;
            console.log(`Habitación ${this.numero} reservada con éxito.`);
        } else {
            console.log(`Habitación ${this.numero} no disponible para reservar.`);
        }
        }
    
        liberar() {
        this.reservada = false;
        console.log(`Habitación ${this.numero} liberada.`);
        }
    }
    
    // Clase Reservacion
    class Reservacion {
        constructor(habitacion, huespedes, fechaInicio, fechaFin) {
        this.habitacion = habitacion;
        this.huespedes = huespedes;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        }
    
        mostrarDetalles() {
        console.log(`Reservación para Habitación ${this.habitacion.numero}`);
        console.log(`Huespedes: ${this.huespedes}`);
        console.log(`Fechas: ${this.fechaInicio} - ${this.fechaFin}\n`);
        }
    }
    
    // Ejemplo de uso
    const hotelEjemplo = new Hotel('Hotel Jarabacoa', 5);
    
    const habitacion1 = new Habitacion(101, 2);
    const habitacion2 = new Habitacion(102, 3);
    const habitacion3 = new Habitacion(103, 1);
    
    hotelEjemplo.agregarHabitacion(habitacion1);
    hotelEjemplo.agregarHabitacion(habitacion2);
    hotelEjemplo.agregarHabitacion(habitacion3);
    
    hotelEjemplo.mostrarDisponibilidad();
    
    habitacion1.reservar();
    hotelEjemplo.mostrarDisponibilidad();
    
    const reservacionEjemplo = new Reservacion(habitacion1, 2, '2023-01-01', '2023-01-05');
    reservacionEjemplo.mostrarDetalles();
    
    // habitacion1.liberar();
    hotelEjemplo.mostrarDisponibilidad();

    