
// 4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Bosquejo
// Entrada:num=0(leer)
// Proceso: Si num > 0 Entonces
//            Escribir num " es positivo."
//          SiNo
//            Escribir num " es negativo"
//          FinSi
// Salida: El mensaje

/*Algoritmo numero_pn
	
	Definir num Como Real
	
    Escribir "Ingrese un número: "
    Leer num
	
    Si num > 0 Entonces
        Escribir num " es positivo."
    SiNo
		Escribir num " es negativo"
	FinSi
	
FinAlgoritmo*/

function numero_pn() {
    let num = parseFloat(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (num > 0) {
        resultado.textContent = `${num} es positivo`;
    } else {
        resultado.textContent = `${num} es negativo`;
    } 
}
