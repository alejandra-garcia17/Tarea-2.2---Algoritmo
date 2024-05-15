
// 5. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// bosquejo
// Entrada: num1=0 (leer), num2=0(leer)
// Proceso: Si num1 = num2 Entonces
//		      Escribir "Son iguales"
//          SiNo
//            Escribir "Son diferentes"
//          Fin Si
// Salida: El mensaje

/*Algoritmo Igual_diferente
	
	Definir num1, num2 Como Entero
	
    Escribir "Ingrese el primer número: "
    Leer num1
	
	Escribir "Ingrese el segundo número: "
    Leer num2
	
    Si num1 = num2 Entonces
		Escribir "Son iguales"
	SiNo
		Escribir "Son diferentes"
	Fin Si
	
FinAlgoritmo*/

function Igual_diferente() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');

    if (num1 === num2) {
        resultado.textContent = 'Son iguales';
    } else {
        resultado.textContent = 'Son diferentes';
    }
}


