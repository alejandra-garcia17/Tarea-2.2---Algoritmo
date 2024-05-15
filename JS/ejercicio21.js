// 21. Solicitar al usuario un número y mostrar si es un número de un solo dígito
// Bosquejo
// Entrada; num
// Proceso: si num >= 0 Y num <= 9 Entonces
		// Escribir "El número es de un solo dígito."
        // Sino
        //     Escribir "El número no es de un solo dígito."
        // FinSi
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como entero
	
	Escribir "Ingrese un numero"
	Leer num
	
	si num >= 0 Y num <= 9 Entonces
		Escribir "El número es de un solo dígito."
	Sino
		Escribir "El número no es de un solo dígito."
	FinSi
	
FinAlgoritmo*/

function numeroDigito() {
    let numero = parseInt(document.getElementById("num").value);

    if (numero >= 0 && numero <= 9) {
        document.getElementById("resultado").innerHTML = "El número es de un solo dígito.";
    } else{
        document.getElementById("resultado").innerHTML = "El número no es de un solo dígito.";
    }
}
