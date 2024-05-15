// 10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito 
// de sus clientes, para esto considera que:
// - Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
// - Si tiene tipo 2 el aumento será del $200
// - Si tiene tipo 3, el aumento será del $300
// - Para cualquier otro tipo será del 500
// - Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
// crédito que tendrá una persona en su tarjeta considerando que después del aumento
// se tendrá que subir 10% adicionales a todas las tarjetas

// Bosquejo
// Entrada: tipoTarjeta, aumento, aumentoTotal, nuevoLimite, aumentoDecimal
// Proceso: aumentoDecimal = aumento * 0.1
//          aumentoTotal = aumento + aumentoDecimal
//          nuevoLimite = aumentoTotal + aumento
// Salida: nuevoLimite

/*Algoritmo calcularNuevoLimite
    Definir tipoTarjeta, aumento, aumentoTotal, nuevoLimite como Entero
    Definir aumentoDecimal como Real
	
    Escribir "Ingrese el tipo de tarjeta (1, 2, 3 u otro): "
    Leer tipoTarjeta
	
    Segun tipoTarjeta Hacer
        caso 1:
            aumento = 100
        caso 2:
            aumento = 200
        caso 3:
            aumento = 300
        De Otro Modo:
            aumento = 500
    Fin Segun
	
    aumentoDecimal = aumento * 0.1
    aumentoTotal = aumento + aumentoDecimal
    nuevoLimite = aumentoTotal + aumento
	
    Escribir "Nuevo límite de crédito: $", nuevoLimite
FinAlgoritmo*/

function calcularNuevoLimite() {
    let tipoTarjeta = document.getElementById("tipoTarjeta").value;
    let aumento = 0;

    switch (tipoTarjeta) {
        case "1":
            aumento = 100;
            break;
        case "2":
            aumento = 200;
            break;
        case "3":
            aumento = 300;
            break;
        default:
            aumento = 500;
            break;
    }

    let aumentoTotal = aumento * 1.1; // Aumento del 10%
    let nuevoLimite = aumentoTotal + aumento;

    document.getElementById("resultado").innerHTML = "Nuevo límite de crédito: $" + nuevoLimite;
}
