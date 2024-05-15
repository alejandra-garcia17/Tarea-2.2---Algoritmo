// 25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
// Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
// el precio de venta. mostrar el precio final incluyendo el 15% del IVA.

// Bosquejo:
// Entrada: precio=0(ingresar), anio=0(ingresar), descuento=0.0(calcular), precioDescuento=0.0(calcular), iva=0.0(calcular), precioFinal=0.0(calcular)
// Proceso: si anio >= 2020 Y anio <= 2023 Entonces
	// 	descuento = precio * 0.05
	// 	precioDescuento = precio - descuento
	// 	iva = precioDescuento * 0.15
	// 	precioFinal = precioDescuento + iva
		
	// 	Escribir "Precio Final con Descuento y IVA: $", precioFinal
	// Sino
	//     iva = precio * 0.15
	// 	precioFinal = precio + iva
		
	// 	Escribir "Precio Final con IVA: $", precioFinal
	// FinSi
// Salida: precioFinal

function calcularPrecioFinal() {
    let precio = parseFloat(document.getElementById("precio").value);
    let anio = parseInt(document.getElementById("anio").value);

    if (anio >= 2020 && anio <= 2023) {
        let descuento = precio * 0.05;
        let precioDescuento = precio - descuento;
        let iva = precioDescuento * 0.15;
        let precioFinal = precioDescuento + iva;

        document.getElementById("resultado").innerHTML = "Precio Final con Descuento y IVA: $" + precioFinal.toFixed(2);
    } else{
        let iva = precio * 0.15;
        let precioFinal = precio + iva;

        document.getElementById("resultado").innerHTML = "Precio Final con IVA: $" + precioFinal.toFixed(2);
    } 
}
