function sumar() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").value = resultado;
}

function opciones() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let op = document.getElementById("opciones").value; // ahora está bien escrito

    let resultado;

    if (op == "Resta") {
        resultado = numero1 - numero2;
    } else if (op == "Multiplicacion") {
        resultado = numero1 * numero2;
    } else if (op == "Division") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
       } else if (op == "Suma") {
        resultado = numero1 + numero2;
    }
}

    document.getElementById("resultado").value = resultado;
}



