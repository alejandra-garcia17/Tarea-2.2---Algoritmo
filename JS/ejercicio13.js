

// 3. Pedir al usuario un número y mostrar si es par o impar
// Bosquejo
// Entrada: num=0(leer)
// Proceso: Si num mod 2 = 0 Entonces 
//		      Escribir num " es par"
//          SiNo
//            Escribir num " es impar" 
//          FinSi
// Salida: El mensaje

/*Algoritmo par_imparEj13
	
	Definir num Como Entero
	
	Escribir "Ingrese un número"
	Leer num
	
	Si num mod 2 = 0 Entonces 
		Escribir num " es par"
	SiNo
		Escribir num " es impar" 
	FinSi
	
FinAlgoritmo*/

function par_impar() {
    let num = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    if (num % 2 === 0) {
        resultado.textContent = `${num} es par`;
    } else {
        resultado.textContent = `${num} es impar`;
    }
}
