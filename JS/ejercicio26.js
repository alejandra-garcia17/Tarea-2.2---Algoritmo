// 26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
// en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
// de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
// aplicar el impuesto.

// Bosquejo
// Entrada: precio=0(ingresar), impuesto=0(ingresar), impuestoAplicado=0(calcular), precioFinal=0(calcular)
// Proceso: si precio > 200 Entonces
	// 	impuestoAplicado = (impuesto / 100) * precio;
	// 	precioFinal = precio + impuestoAplicado;
		
	// 	Escribir "Precio Final con impuesto de venta es $", precioFinal
	// Sino
	// 	Escribir "No se aplica impuesto de ventas."
	// FinSi
// Salida: precioFinal

/*Algoritmo sin_titulo
	
	Definir precio, impuesto, impuestoAplicado, precioFinal Como Real
	
	Escribir "Ingrese el precio de venta"
	Leer precio
	Escribir "Ingrese el impuesto"
	Leer impuesto

	si precio > 200 Entonces
		impuestoAplicado = (impuesto / 100) * precio;
		precioFinal = precio + impuestoAplicado;
		
		Escribir "Precio Final con impuesto de venta es $", precioFinal
	Sino
		Escribir "No se aplica impuesto de ventas."
	FinSi
	
FinAlgoritmo*/

function calcularPrecioFinal() {
    let precio = parseFloat(document.getElementById("precio").value);
    let impuesto = parseFloat(document.getElementById("impuesto").value);

    
        if (precio > 200) {
            let impuestoAplicado = (impuesto / 100) * precio;
            let precioFinal = precio + impuestoAplicado;

            document.getElementById("resultado").innerHTML = "Precio Final con Impuesto de Ventas: $" + precioFinal.toFixed(2);
        } else {
            document.getElementById("resultado").innerHTML = "No se aplica impuesto de ventas.";
        }
}
