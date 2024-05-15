// 1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
// Bosquejo
// Eentrada: a=8 y b=5
// Proceso: x = 2 * b + a div 2 + 4 * b mod a
// Salida: x

/*Algoritmo ejercicio_1
	
	/// 1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
	
	// y = 2 * 5 + 8 div 2 + 4 * 5 mod 8
	// y = 10 + 8 div 2 + 20 mod 8
	// y = 10 + 8 div 2 + 4
	// y = 10 + 4 + 4
	// y = 18
	
	Definir a, b, x Como Entero
	a=8
	b=5
	
	x = 2 * b + trunc(8/2) + 4 * b MOD a

	Escribir "el resultado es: ", x
	
FinAlgoritmo*/

function expresion1() {

    let a,b,y,resp
        
        a = parseInt(a) // convierte el valor alfanueric a texto
        b = parseInt(b) // convierte el valor alfanueric a texto
        a=8
        b=5
        y = 2 * b + (8/2) + 4 * b % a

        resp = document.getElementById("resultado")
        resp.innerHTML = `Expresion 1: y = 2 * ${b} + (${a}/2) + 4 * ${b} % a = ${y}`

}

