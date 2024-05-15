// 18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 
// Bosquejo
// Entrada: num=0(ingresar)
// Proceso: si num % 3 = 0 Y num % 2 = 0 Entonces
//             Escribir "el numero es multiplo de tres y par"
//          Sino
//             Escribir "No cumple los requisitos"
//          FinSi
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como entero
	
	Escribir "Ingrese un numero"
	Leer num
	
	si num % 3 = 0 Y num % 2 = 0 Entonces
		Escribir "el numero es multiplo de tres y par"
	Sino
		Escribir "No cumple los requisitos"
	FinSi
	
FinAlgoritmo*/

function mulPar(){
    let num = document.getElementById('num').value;

    if (num % 3 == 0 && num % 2 == 0) {
        resultado.textContent = "El numero es multiplo de tres y par";
    } else{
        resultado.textContent = "No cumple los requisitos";
    } 
}