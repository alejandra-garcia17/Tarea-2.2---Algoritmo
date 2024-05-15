// 29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
// del bono de antigüedad del empleado aplicando el 3% del salario por el número de
// años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
// antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.

// Bosquejo
// Entrada: salarioActual, antiguedad, bonoAntiguedad, salarioConBono
// Proceso: si antiguedad > 3 Entonces
	// 	bonoAntiguedad = 0.03 * salarioActual * antiguedad;
	// 	salarioConBono = salarioActual + bonoAntiguedad;
		
	// 	Escribir "Salario Actual", salarioActual
	// 	Escribir "Bono de antiguedad;", bonoAntiguedad
	// 	Escribir "Salario con bono de antiguedad:", salarioConBono
	// Sino
	// 	Escribir "Salario Actual", salarioActual
	// 	Escribir "Bono de antiguedad: $0.0 (No aplica)"
	// FinSi
// Salida: salarioActual, bonoAntiguedad, salarioConBono

/*Algoritmo sin_titulo
	
	Definir salarioActual, antiguedad, bonoAntiguedad, salarioConBono Como Real
	
	Escribir "Ingrese su salario actual"
	Leer salarioActual
	Escribir "Ingrese su antiguedad en la empresa"
	Leer antiguedad
	
	si antiguedad > 3 Entonces
		bonoAntiguedad = 0.03 * salarioActual * antiguedad;
		salarioConBono = salarioActual + bonoAntiguedad;
		
		Escribir "Salario Actual", salarioActual
		Escribir "Bono de antiguedad;", bonoAntiguedad
		Escribir "Salario con bono de antiguedad:", salarioConBono
	Sino
		Escribir "Salario Actual", salarioActual
		Escribir "Bono de antiguedad: $0.0 (No aplica)"
	FinSi
	
FinAlgoritmo*/

function calcularBonoAntiguedad() {
    let salarioActual = parseFloat(document.getElementById("salario").value);
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    if (antiguedad > 3) {
            let bonoAntiguedad = 0.03 * salarioActual * antiguedad;
            let salarioConBono = salarioActual + bonoAntiguedad;

            document.getElementById("resultado").innerHTML = "Salario Actual: $" + salarioActual.toFixed(2) + "<br>Bono de Antigüedad: $" + bonoAntiguedad.toFixed(2) + "<br>Salario con Bono de Antigüedad: $" + salarioConBono.toFixed(2);
    } else {
            document.getElementById("resultado").innerHTML = "Salario Actual: $" + salarioActual.toFixed(2) + "<br>Bono de Antigüedad: $0.00 (No aplica)";
    }
}

