// 12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 
// Bosquejo
// Entrada: edad=0(ingresar)
// Proceso: si edad > 18 Entonces
//             Escribir "Usted es mayor de edad"
//          sino
//             Escribir "Usted todavia es menor de edad"
// Salida: El mensaje

function Edad() {
    let edad = parseInt(document.getElementById("num").value);

    if (edad > 18) {
        resultado = "Usted es mayor de edad"
    } else{
        resultado = "Usted todavia no es mayor de edad"
    }

    document.getElementById("resultado").innerHTML = resultado;
}