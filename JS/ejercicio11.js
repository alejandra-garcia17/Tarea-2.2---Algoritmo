// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Bosquejo:
// Entrada: num=0(ingresar)
// Proceso: Si num > 10 Entonces
//             Escribir num " es mayor que 10"
//          SiNo
//             Escribir num " es menor que 10"
//          Fin Si
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como Entero
	
	Escribir "ingrese un numero"
	Leer num
	
	Si num > 10 Entonces
		Escribir num " es mayor que 10"
	SiNo
		Escribir num " es menor que 10"
	Fin Si
	
FinAlgoritmo*/

function mayorMenor() {
    let num = parseInt(document.getElementById("num").value);

    if (num > 10) {
        resultado = `${num} es mayor que 10`
    } else{
        resultado = `${num} es menor que 10`
    }

    document.getElementById("resultado").innerHTML = resultado;
}