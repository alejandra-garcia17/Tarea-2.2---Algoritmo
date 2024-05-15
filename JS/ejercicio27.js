// 27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
// sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
// aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
// aplicado.

// Bosquejo
// Entrada: sueldoActual=0(ingresar), incrementoSalarial=0.0(calcular), sueldoEsperado=0.0(calcular)
// Proceso: si sueldoActual < 500 Entonces
	// 	incrementoSalarial = (5 / 100) * sueldoActual;
	// 	sueldoEsperado = sueldoActual + incrementoSalarial;
		
	// 	Escribir "Sueldo Esperado con Incremento: $" , sueldoEsperado
	// Sino
	// 	Escribir "No se aplica incremento salarial"
	// FinSi
// Salida: sueldoEsperado

/*Algoritmo sin_titulo
	
	Definir sueldoActual, incrementoSalarial, sueldoEsperado Como Real
	
	Escribir "Ingrese el precio de venta"
	Leer sueldoActual

	si sueldoActual < 500 Entonces
		incrementoSalarial = (5 / 100) * sueldoActual;
		sueldoEsperado = sueldoActual + incrementoSalarial;
		
		Escribir "Sueldo Esperado con Incremento: $" , sueldoEsperado
	Sino
		Escribir "No se aplica incremento salarial"
	FinSi
	
FinAlgoritmo*/

function calcularSueldoEsperado() {
    let sueldoActual = parseFloat(document.getElementById("sueldo").value);

        if (sueldoActual < 500) {
            let incrementoSalarial = (5 / 100) * sueldoActual;
            let sueldoEsperado = sueldoActual + incrementoSalarial;

            document.getElementById("resultado").innerHTML = "Sueldo Esperado con Incremento: $" + sueldoEsperado.toFixed(2);
        } else {
            document.getElementById("resultado").innerHTML = "No se aplica incremento salarial.";
        }
    
}
