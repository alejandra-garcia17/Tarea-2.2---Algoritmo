// 7. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
// del numero3 Y si el numero 2 es el doble del numero4.

// Bosquejo
// Entrada: num1, num2, num3, num4 (ingresados)
// Proceso: Si num1 % num3 = 0 Entonces
// 		       Escribir "si es divisor"
// 		        si num2 * 2 = num4 Entonces
// 		       	   Escribir "si es el doble"
// 		        FinSi
// 	        SiNo
// 	        	Escribir "No se cumple ningun requisito"
// 	        Fin Si
// Salida: El mensaje

// Algoritmo ejercicio_6
	
// 	Definir num1, num2, num3, num4 Como entero
	
// 	Escribir "Ingrese un numero"
// 	leer num1
// 	Escribir "Ingrese un numero"
// 	leer num2
// 	Escribir "Ingrese un numero"
// 	leer num3
// 	Escribir "Ingrese un numero"
// 	leer num4
	
// 	Si num1 % num3 = 0 Entonces
// 		Escribir "si es divisor"
// 		si num2 * 2 = num4 Entonces
// 			Escribir "si es el doble"
// 		FinSi
// 	SiNo
// 		Escribir "No se cumple ningun requisito"
// 	Fin Si
	
// FinAlgoritmo

function verificarNumeros2() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);

    if (num1 % num3 == 0) {
        resultado = "Número 1 es divisor del número 3: "
    } if (num2 * 2 == num4){
        resultado += "Número 2 es el doble del número 4: "
    } else{
        resultado += "No se cumple ningun requisito"
    }

    document.getElementById("resultado").innerHTML = resultado;
}
