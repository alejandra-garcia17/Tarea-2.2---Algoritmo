// 17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
// segundo o menor que el segundo
// Bosquejo
// Entrada: nombre1=""(ingresar), nombre2=""(ingresar)
// Proceso: Si nombre1 = nombre2 Entonces
		// Escribir "Los nombres son iguales."
        // SiNo
        //     Si nombre1 > nombre2 Entonces
        //         Escribir nombre1 " es mayor que ", nombre2
        //     SiNo
        //         Escribir nombre1 " es menor que ", nombre2
        //     FinSi
        // Fin Si
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir nombre1, nombre2 Como Caracter
	
	Escribir "ingrese nombre uno"
	Leer nombre1
	Escribir "ingrese nombre uno"
	Leer nombre2
	
	Si nombre1 = nombre2 Entonces
		Escribir "Los nombres son iguales."
	SiNo
		Si nombre1 > nombre2 Entonces
			Escribir nombre1 " es mayor que ", nombre2
		SiNo
			Escribir nombre1 " es menor que ", nombre2
		FinSi
	Fin Si
	
FinAlgoritmo*/

function compararNombres() {
        
    let nombre1 = document.getElementById('nombre1').value;
    let nombre2 = document.getElementById('nombre2').value;
    let resultado = document.getElementById('resultado');

    if (nombre1 === nombre2) {
        resultado.textContent = "Los nombres son iguales.";
    } else if (nombre1 > nombre2) {
        resultado.textContent = `${nombre1} es mayor que ${nombre2}.`;
    } else {
        resultado.textContent = `${nombre1} es menor que ${nombre2}.`;
    }
}