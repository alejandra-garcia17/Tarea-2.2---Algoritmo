// 2. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
// Bosquejo
// Eentrada: resultado
// Proceso: (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
// Salida: resultado

/*Algoritmo ejercicio_2
	
	/// 2. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
	// m = 11 + 9 > 3 * 5 * 14 % 3
	// m = 11 + 9 > 210 % 3
	// m = 20 > 0 
	// m = verdadero
	
	Definir resultado Como Logico
	
	resultado = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
	
	Escribir "el resultado es: ", resultado
		
FinAlgoritmo*/

    function expresion2() {
        let resultado;
        resultado = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
        document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
    }
