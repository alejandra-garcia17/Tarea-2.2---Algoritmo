
// 6. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Bosquejo
// Entrada: caracter=""(leer)
// Proceso: Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
//				resultado <- caracter + " es una vocal."
//          Sino
//              resultado <- caracter + " es una consonante."
//          FinSi
// Salida: El mensaje

/*Algoritmo sin_titulo
	
		Definir caracter Como Caracter
		Definir resultado Como Cadena
		
		Escribir "Ingrese un carácter:"
		Leer caracter
		
		Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
				resultado <- caracter + " es una vocal."
			Sino
				resultado <- caracter + " es una consonante."
		FinSi
		Escribir resultado
		
FinAlgoritmo*/

function identificarCaracter() {
   
    let caracter = document.getElementById('caracter').value.toLowerCase(); // Convertir a minúsculas
    let resultado = document.getElementById('resultado');

    if (caracter.length !== 1 || !/[a-z]/.test(caracter)) { // Verificar si es una letra válida
        resultado.textContent = "Por favor ingrese una letra válida.";
    } else if ('aeiou'.includes(caracter)) { // Verificar si es vocal
        resultado.textContent = `${caracter} es una vocal.`;
    } else { // Si no es vocal, es consonante
        resultado.textContent = `${caracter} es una consonante.`;
    }
}
