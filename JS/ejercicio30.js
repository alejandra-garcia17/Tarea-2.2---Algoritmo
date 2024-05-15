// 30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
// que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
// descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
// muestra el monto final con el descuento aplicado más el IVA del 15%.

// Bosquejo
// Entrada: totalCuenta=0(ingresar), descuentoFidelidad=0(ingresar), totalConDescuento=0.0(calcular), descuento=0.0(calcular), montoFinal=0.0(calcular), iva=0.0(calcular)
// Proceso: si totalCuenta > 70 Entonces
	// 	descuento = (descuentoFidelidad / 100) * totalCuenta;
	// 	totalConDescuento = totalCuenta - descuento;
	// 	iva = totalConDescuento * 0.15;
	// 	montoFinal = totalConDescuento + iva;
		
	// 	Escribir "Monto Final con Descuento y IVA: $", montoFinal
	// Sino
	// 	iva = totalCuenta * 0.15;
	// 	montoFinal = totalCuenta + iva;
		
	// 	Escribir "Monto Final con IVA: $", montoFinal
	// FinSi
// Salida: montoFinal

/*Algoritmo sin_titulo
	
	Definir totalCuenta, descuentoFidelidad, totalConDescuento, descuento, montoFinal, iva Como Real
	
	Escribir "Ingrese el total de su cuenta"
	Leer totalCuenta
	Escribir "Ingrese el descuento por fidelidad"
	Leer descuentoFidelidad

	si totalCuenta > 70 Entonces
		descuento = (descuentoFidelidad / 100) * totalCuenta;
		totalConDescuento = totalCuenta - descuento;
		iva = totalConDescuento * 0.15;
		montoFinal = totalConDescuento + iva;
		
		Escribir "Monto Final con Descuento y IVA: $", montoFinal
	Sino
		iva = totalCuenta * 0.15;
		montoFinal = totalCuenta + iva;
		
		Escribir "Monto Final con IVA: $", montoFinal
	FinSi
	
FinAlgoritmo*/

function calcularMontoFinal() {
    let totalCuenta = parseFloat(document.getElementById("total").value);
    let descuentoFidelidad = parseFloat(document.getElementById("descuento").value);

        if (totalCuenta > 70) {
            let descuento = (descuentoFidelidad / 100) * totalCuenta;
            let totalConDescuento = totalCuenta - descuento;
            let iva = totalConDescuento * 0.15;
            let montoFinal = totalConDescuento + iva;

            document.getElementById("resultado").innerHTML = "Monto Final con Descuento y IVA: $" + montoFinal.toFixed(2);
        } else{
            let iva = totalCuenta * 0.15;
            let montoFinal = totalCuenta + iva;

            document.getElementById("resultado").innerHTML = "Monto Final con IVA: $" + montoFinal.toFixed(2);
        }
}
