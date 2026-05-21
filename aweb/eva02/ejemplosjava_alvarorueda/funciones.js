let misAhorros = 1000;

function comprarMascota(coste = 100) { 
    if (misAhorros >= coste) {
        misAhorros = misAhorros - coste;
        return "Éxito: Has gastado " + coste + ". Saldo restante: " + misAhorros;
    } else {
        return "Fracaso: Saldo insuficiente (" + misAhorros + ") para pagar " + coste;
    }
}
console.log(comprarMascota());      
console.log(comprarMascota(150));   
console.log(comprarMascota(1000));  