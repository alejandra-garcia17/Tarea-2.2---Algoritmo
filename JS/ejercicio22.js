// 22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
// y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
// al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.

// Bosquejo
// Entrada: monto=0(ingresar), anio=0(ingresar), iva=0.0(calcular), total=0.0(calcular)
// Proceso: si anio < 2023 Entonces
		// iva = monto * 0.12
        // Sino
        //     iva = monto * 0.15
        // FinSi
        
        // total = monto + iva
// Salida: total

/*Algoritmo sin_titulo
	
	Definir monto, anio, iva, total Como Real
	iva = 0
	
	Escribir "Ingrese el monto"
	Leer monto
	Escribir "Ingrese el año de fabricacion"
	Leer anio
	
	si anio < 2023 Entonces
		iva = monto * 0.12
	Sino
		iva = monto * 0.15
	FinSi
	
	total = monto + iva
	
	Escribir "Monto Total a Pagar (IVA incluido): $", total
	
FinAlgoritmo*/

function calcularTotal() {
    let monto = parseFloat(document.getElementById("monto").value);
    let anio = parseInt(document.getElementById("anio").value);
    let iva = 0;

        if (anio < 2024) {
            iva = monto * 0.12; // IVA del 12%
        } else {
            iva = monto * 0.15; // IVA del 15%
        }
        let total = monto + iva;

        document.getElementById("resultado").innerHTML = "Monto Total a Pagar (IVA incluido): $" + total.toFixed(2);
    
}
