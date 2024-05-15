// 5. ((8 > 2) | | (932 < 23) ) && 4 == 2

/*Algoritmo ejercicio_3
	
	/// 5. ((8 > 2) | | (932 < 23) ) && 4 == 2
    // (true || false) && false
	
	Definir a Como logicos
	a =  ((8 > 2) O (932 < 23) ) Y 4 = 2
	
	Escribir "el resultado es: ", a
	
FinAlgoritmo*/

function expresion5() {
    let resultado;
    resultado = ((8 > 2) || (932 < 23)) && (4 == 2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}
