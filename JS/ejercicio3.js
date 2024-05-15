// 3. 2 *(4 – 10 + 8)/2* 36 *(1/2)

/*Algoritmo ejercicio_3
	
	/// 3. 2 * (4 - 10 + 8)/2 * 36 * (1/2)
	// 2 * 2 / 2 * 36 * 0.5
	// 2 * 1 * 36 * 0.5 
	// 36
	
	Definir r Como Entero
	r =  2 * (4 - 10 + 8)/2 * 36 * (1/2)
	
	Escribir "el resultado es: ", r
	
FinAlgoritmo*/

function expresion3() {
    let r;
    r = 2 * (4 - 10 + 8)/2 * 36 * (1/2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + r;
}
