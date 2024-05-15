// 8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
// es positivo par o impar múltiplo de 7.

function verificarNumero3() {
    let numero = parseInt(document.getElementById("num").value);

    if (numero < -20 && numero < 0) {
        document.getElementById("resultado").innerHTML = "El número es negativo y menor que -20.";
    } else if (numero > 0) {
        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = "El número es positivo y par.";
        } else {
            if (numero % 7 === 0) {
                document.getElementById("resultado").innerHTML = "El número es positivo e impar y múltiplo de 7.";
            } else {
                document.getElementById("resultado").innerHTML = "El número es positivo e impar.";
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "El número es 0.";
    }
}
