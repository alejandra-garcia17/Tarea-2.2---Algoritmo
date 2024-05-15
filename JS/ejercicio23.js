// 23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
// Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
// precio sea mayor $100.

// Bosquejo
// Entrada: precio=0(ingresar), descuento=0(ingresar), descuentoAplicado=0.0(calcular), precioFinal=0(calcular)
// Proceso: si precio > 100 Entonces
	// 	descuentoAplicado = (descuento / 100) * precio
	// 	precioFinal = precio - descuentoAplicado
	// Sino
	// 	Escribir "El precio debe ser mayor a $100"
	// FinSi
		
	// Escribir "Precio Final con Descuento: $", precioFinal
// Salida: precioFinal

/*Algoritmo sin_titulo
	
	Definir precio, descuento, descuentoAplicado, precioFinal Como Real
	
	Escribir "Ingrese el precio del producto"
	Leer precio
	Escribir "Ingrese el descuento"
	Leer descuento
	
	si precio > 100 Entonces
		descuentoAplicado = (descuento / 100) * precio
		precioFinal = precio - descuentoAplicado
	Sino
		Escribir "El precio debe ser mayor a $100"
	FinSi
		
	Escribir "Precio Final con Descuento: $", precioFinal
	
FinAlgoritmo*/

function calcularPrecioFinal() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = parseFloat(document.getElementById("descuento").value);

    if (precio > 100) {
        let descuentoAplicado = (descuento / 100) * precio;
        let precioFinal = precio - descuentoAplicado;

        document.getElementById("resultado").innerHTML = "Precio Final con Descuento: $" + precioFinal.toFixed(2);
    } else{
        document.getElementById("resultado").innerHTML = "El precio debe ser mayor a $100";
    }
}

