// 28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
// descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
// aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
// monto final con el descuento con el IVA del 15%.

// Bosquejo
// Entrada: precioTotal=0(ingresar), descuentoConCupon=0(ingresar), iva=0.0(calcular), descuento=0.0(calcular), montoFinal=0.0(calcular), precioConDescuento=0.0(calcular)
// Proceso: si precioTotal > 10 Entonces
	// 	descuento = (descuentoConCupon / 100) * precioTotal;
	// 	precioConDescuento = precioTotal - descuento;
	// 	iva = precioConDescuento * 0.15;
	// 	montoFinal = precioConDescuento + iva;
		
	// 	Escribir "Monto Final con Descuento y IVA: $", montoFinal
	// Sino
	// 	iva = precioTotal * 0.15;
	// 	montoFinal = precioTotal + iva;
		
	// 	Escribir "Monto Final con IVA: $", montoFinal
	// FinSi
// Salida: montoFinal

/*Algoritmo sin_titulo
	
	Definir precioTotal, descuentoConCupon, iva, descuento, montoFinal, precioConDescuento Como Real
	
	Escribir "Ingrese el precio de venta"
	Leer precioTotal
	Escribir "Ingrese el cupon de descuento"
	Leer descuentoConCupon

	si precioTotal > 10 Entonces
		descuento = (descuentoConCupon / 100) * precioTotal;
		precioConDescuento = precioTotal - descuento;
		iva = precioConDescuento * 0.15;
		montoFinal = precioConDescuento + iva;
		
		Escribir "Monto Final con Descuento y IVA: $", montoFinal
	Sino
		iva = precioTotal * 0.15;
		montoFinal = precioTotal + iva;
		
		Escribir "Monto Final con IVA: $", montoFinal
	FinSi
	
FinAlgoritmo*/

function calcularMontoFinal() {
    let precioTotal = parseFloat(document.getElementById("precio").value);
    let descuentoCupon = parseFloat(document.getElementById("cupon").value);

    
        if (precioTotal > 10) {
            let descuento = (descuentoCupon / 100) * precioTotal;
            let precioConDescuento = precioTotal - descuento;
            let iva = precioConDescuento * 0.15;
            let montoFinal = precioConDescuento + iva;

            document.getElementById("resultado").innerHTML = "Monto Final con Descuento y IVA: $" + montoFinal.toFixed(2);
        } else{
            let iva = precioTotal * 0.15;
            let montoFinal = precioTotal + iva;

            document.getElementById("resultado").innerHTML = "Monto Final con IVA: $" + montoFinal.toFixed(2);
        }
}
