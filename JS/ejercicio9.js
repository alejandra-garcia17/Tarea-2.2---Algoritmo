// 9. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
// porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
// aumento.

// Bosquejo
// Eentrada: salarioActual=0 (ingresar), aumentoPorcentaje=0(ingresar), aumentoDecimal=0(calculable), nuevoSalario=0(calculable)
// Proceso: aumentoDecimal = aumentoPorcentaje/100
//      	nuevoSalario = salarioActual * (1 + aumentoDecimal)
// Salida: nuevoSalario

/*Algoritmo ejercicio_9
	
	Definir salarioActual, aumentoPorcentaje, aumentoDecimal, nuevoSalario Como Real
	
	Escribir "Ingrese su salario: "
	leer salarioActual
	Escribir "Ingrese su aumento: "
	Leer aumentoPorcentaje
	
	aumentoDecimal = aumentoPorcentaje/100
	nuevoSalario = salarioActual * (1 + aumentoDecimal)
		
	Escribir "Nuevo salario después del aumento: $", nuevoSalario
	
FinAlgoritmo*/

function calcularNuevoSalario() {
    let salarioActual = parseFloat(document.getElementById("salario").value);
    let aumentoPorcentaje = parseFloat(document.getElementById("aumento").value);
    
        let aumentoDecimal = aumentoPorcentaje / 100;
        let nuevoSalario = salarioActual * (1 + aumentoDecimal);

        document.getElementById("resultado").innerHTML = "Nuevo salario después del aumento: $" + nuevoSalario.toFixed(2);
    
}
