
if (dinero >= precioMascota) {
    dinero = dinero - Mascota;
    console.log("¡Compra realizada! Saldo actual: " + dinero);
} else {
    console.log("Error: No tienes fondos suficientes.");
}