// 4. 260 / 12 + 54 % 3 – 85 % 7

/*Algoritmo ejercicio_3
	
	/// 4. 260 / 12 + 54 % 3 - 85 % 7
	// 21.66 + 0 - 1
	// 20.66
	
	Definir d Como real
	d =  260 / 12 + 54 % 3 - 85 % 7
	
	Escribir "el resultado es: ", d
	
FinAlgoritmo*/

function expresion4() {
    let d;
    d = 260 / 12 + 54 % 3 - 85 % 7;
    document.getElementById("resultado").innerHTML = "El resultado es: " + d;
}