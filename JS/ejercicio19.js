// 19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
// Bosquejo
// Entrada: num
// Proceso: si num % 2 = 0 Entonces
		// Escribir "el numero es multiplo de dos y par"
        // Sino
        //     Escribir "El numero es impar"
        // FinSi
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como entero
	
	Escribir "Ingrese un numero"
	Leer num
	
	si num % 2 = 0 Entonces
		Escribir "el numero es multiplo de dos y par"
	Sino
		Escribir "El numero es impar"
	FinSi
	
FinAlgoritmo*/

function mulImpar() {
    let numero = parseInt(document.getElementById("num").value);

        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = "El número es divisible por 2.";
        } else {
            document.getElementById("resultado").innerHTML = "El número es impar.";
        }
}
