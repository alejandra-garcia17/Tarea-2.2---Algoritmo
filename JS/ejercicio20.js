// 20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100. 
// Bosquejo
// Entrada: num
// Proceso: si num > 0 Y num <= 100 Entonces
		// Escribir "El número es mayor que 0 y menor o igual a 100."
        // Sino
        //     Escribir "El número no cumple con la condición especificada."
        // FinSi
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como entero
	
	Escribir "Ingrese un numero"
	Leer num
	
	si num > 0 Y num <= 100 Entonces
		Escribir "El número es mayor que 0 y menor o igual a 100."
	Sino
		Escribir "El número no cumple con la condición especificada."
	FinSi
	
FinAlgoritmo*/

function mayor0Menor100() {
    let numero = parseFloat(document.getElementById("num").value);

    if (numero > 0 && numero <= 100) {
        document.getElementById("resultado").innerHTML = "El número es mayor que 0 y menor o igual a 100.";
    } else {
        document.getElementById("resultado").innerHTML = "El número no cumple con la condición especificada.";
    }
}
